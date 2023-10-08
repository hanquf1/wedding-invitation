// import { useScript } from './useScript';
//
// import { GOOGLE_ENV } from '../../env';
//
// export const GoogleInit = () => {
//   const [ loading1 ] = useScript('https://apis.google.com/js/api.js');
//   const [ loading2 ] = useScript('https://accounts.google.com/gsi/client');
//
//   const { client_email, private_key, client_id, api_key, sheet_id } = GOOGLE_ENV;
//
//   const promise = new Promise((resolve, reject) => {
//     const initClient = async () => {
//       await window.gapi.client
//         .init({
//           apiKey: api_key,
//           clientId: client_id,
//           discoveryDocs: [
//             'https://sheets.googleapis.com/$discovery/rest?version=v4',
//           ],
//         })
//         .then((res) => {
//           console.log('성공', res);
//
//           // window.gapi.client.request({ path: `https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values/A1:B2` }).then((response) => {
//           //   console.log('response', response);
//           // });
//           window.gapi.client.request({
//             path: `https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values/A1:B2`,
//             method: 'PUT',
//             body: { values: 'test' },
//
//           }).then((response) => {
//             console.log('response', response);
//           });
//           resolve(true);
//         })
//         .catch(() => {
//           console.log('실패');
//           reject(false);
//         });
//     };
//     if (loading1 && loading2) {
//       window.google.accounts.oauth2.initTokenClient({
//         client_id,
//         scope: 'https://www.googleapis.com/auth/spreadsheets',
//       });
//       window.gapi.load('client:auth2', initClient);
//     }
//   });
//   return promise;
// };