// import { Flex } from '@mint-ui/core';
// // import { JWT, GoogleAuth } from 'google-auth-library';
// // import { GoogleSpreadsheet } from 'google-spreadsheet';
// // import { google } from 'googleapis';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
//
// import { GOOGLE_ENV } from '../../env';
// import { GoogleInit } from '../hooks/useGoogleInit';
//
// export function Board() {
//   const { client_email, private_key, client_id } = GOOGLE_ENV;
//
//   console.log('client_email', client_email);
//   console.log('private_key', private_key);
//
//   const [ isGoogleInit, setIsGoogleInit ] = useState(false);
//
//   // (async function () {
//   //   const res = await GoogleInit();
//   //   console.log('res', res);
//   //   setIsGoogleInit(res);
//   // }());
//
//   useEffect(() => {
//     console.log('isGoogleInit', isGoogleInit);
//
//     axios.get('https://accounts.google.com/o/oauth2/auth', {
//       params: {
//         client_id,
//         redirect_uri: 'http://localhost:5500',
//         scope: 'https://www.googleapis.com/auth/spreadsheets',
//       },
//     });
//   }, [ ]);
//
//   // useEffect(() => {
//   //   if (client_email && private_key) {
//   //     const auth = new JWT({
//   //       email: 'gg',
//   //       key: 'ff',
//   //       scopes: [ 'https://www.googleapis.com/auth/spreadsheets' ],
//   //     });
//   //
//   //     auth.authorize((err, token) => {
//   //       console.log('err', err);
//   //       console.log('token', token);
//   //     });
//   //   }
//   // }, [ client_email, private_key ]);
//
//   useEffect(() => {
//     // const getGoogleSheetsInfo = async () => {
//     //   const res = await googleSheet.spreadsheets.values.get({
//     //     spreadsheetId: '1OeetjgkvyqkN6oz8tJlunBpGuQ9wn6XUDtrZQTl6NFs',
//     //     range: 'A1:A3',
//     //   });
//     //   console.log('res', res);
//     // };
//
//     // console.log('auth', auth);
//     // const googleSheet = google.sheets({ version: 'v4', auth });
//     //
//     // getGoogleSheetsInfo();
//   }, []);
//
//   return (
//     <Flex>
//       board
//     </Flex>
//   );
// }