import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
});

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCvBxFKQJqnhSYPaTprgoPERB1COSOaRzs",
//   authDomain: "rohy-6025b.firebaseapp.com",
//   projectId: "rohy-6025b",
//   storageBucket: "rohy-6025b.appspot.com",
//   messagingSenderId: "1090485027080",
//   appId: "1:1090485027080:web:73fe0b1b2d4e8520f2acbd"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
