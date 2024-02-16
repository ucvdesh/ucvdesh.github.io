// @ts-nocheck
import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  let geotab = {
    addin: {
      moveEv: () => {}
    },
    customButtons: {},
    isDriveAddin: false
  }

  useEffect(() => {
    console.log(windows)
    window.geotab.addin.moveEv = function () {


      // the root container
      var elAddin = document.getElementById('moveEv');


      var api;
      var state;


      // Data for the bar chart
      const barData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
          label: 'Total Kilowatts',
          data: [13, 24, 33, 30, 48, 52, 66, 56, 77, 96],
          backgroundColor: 'rgba(0, 123, 255, 0.5)'
        }]
      };

      // Data for the pie chart
      const pieData = {
        labels: ['Fossil', 'Potential', 'EV Savings'],
        datasets: [{
          label: 'Pie Dataset',
          data: [46, 14, 40],
          backgroundColor: [
            'red', 'orange', 'green'
          ]
        }]
      };

      // Options for the bar chart
      const barOptions = {
        type: 'bar',
        data: barData,
        options: {
          maintainAspectRatio: false, // Add this line
          responsive: true  // Ensures chart is responsive
        }
      };


      // Options for the pie chart
      const pieOptions = {
        type: 'pie',
        data: pieData,
        options: {
          maintainAspectRatio: false, // Add this line
          responsive: true  // Ensures chart is responsive
        }
      };

      return {

        /**
         * initialize() is called only once when the Add-In is first loaded. Use this function to initialize the
         * Add-In's state such as default values or make API requests (MyGeotab or external) to ensure interface
         * is ready for the user.
         * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
         * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
         * @param {function} initializeCallback - Call this when your initialize route is complete. Since your initialize routine
         *        might be doing asynchronous operations, you must call this method when the Add-In is ready
         *        for display to the user.
         */
        initialize: async function (freshApi, freshState, initializeCallback) {
          api = freshApi;
          state = freshState;

          const test = await api.call('Get', {
            typeName: 'FuelUsed'
          });

          console.log('test', test);

          console.log('initializeTriggered');

          if (state.translate) {
            state.translate(elAddin || '');
          }

          initializeCallback();
        },

        /**
         * focus() is called whenever the Add-In receives focus.
         *
         * The first time the user clicks on the Add-In menu, initialize() will be called and when completed, focus().
         * focus() will be called again when the Add-In is revisited. Note that focus() will also be called whenever
         * the global state of the MyGeotab application changes, for example, if the user changes the global group
         * filter in the UI.
         *
         * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
         * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
         */
        focus: function (freshApi, freshState) {

          // getting the current user to display in the UI
          freshApi.getSession(session => {
            elAddin.querySelector('#moveEv-user').textContent = session.userName;
          });


          elAddin.className = '';
          // show main content

        },

        /**
         * blur() is called whenever the user navigates away from the Add-In.
         *
         * Use this function to save the page state or commit changes to a data store or release memory.
         *
         * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
         * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
         */
        blur: function () {
          // hide main content
          elAddin.className += ' hidden';
        }
      };
    };
  }, []);

  return (
    <iframe src="https://my-test-app-gamma-eight.vercel.app/" title="YouTube video player" style={{width: "100%", height: "100vh"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  );
}

export default App;
