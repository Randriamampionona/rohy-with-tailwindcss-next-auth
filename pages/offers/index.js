import { useRef } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
	collection,
	addDoc,
	serverTimestamp,
	doc,
	getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function OfferPage() {
	const { data: session } = useSession();
	const inputRef = useRef(null);

	const sendPost = async (e) => {
		// prevent page refresh on submit
		e.preventDefault();

		// only submit if message exists
		if (!inputRef.current?.value) return;

		/* Firebase v9 Cloud Firestore document creation
      - If no collection exists, it is created
      - If no document exists, it is created
      - If document exists, it is replaced (unless merge option specified)
    */
		await addDoc(collection(db, "fb-posts"), {
			message: inputRef.current.value,
			name: session?.user?.name,
			email: session?.user?.email,
			image: session?.user?.image,
			timestamp: serverTimestamp(),
		});

		inputRef.current.value = "";
	};

	const getDocHandler = async () => {
		const docRef = doc(db, "users", "PHMCyy4ytna5u781xEA4");

		try {
			const docSnap = await getDoc(docRef);
			console.log(docSnap.data());
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-white container m-auto p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			<div className="flex items-center space-x-4 p-4">
				{session && session.user && (
					<Image
						className="rounded-full"
						height={40}
						width={40}
						layout="fixed"
						src={session?.user?.image}
						alt="user profile picture"
					/>
				)}
				<form className="flex flex-1" onSubmit={sendPost}>
					<input
						type="text"
						ref={inputRef}
						placeholder={`What's on your mind, ${session?.user?.name}?`}
						className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
					/>
					<button onClick={sendPost} hidden type="submit">
						Submit
					</button>
				</form>
			</div>

			<div className="flex justify-evenly p-2 border-t">
				<div className="inputIcon">
					<p className="text-xs sm:text-sm xl:text-base">
						Live Video
					</p>
				</div>

				<div className="inputIcon">
					<p className="text-xs sm:text-sm xl:text-base">
						Photos/Video
					</p>
				</div>

				<div className="inputIcon">
					<p className="text-xs sm:text-sm xl:text-base">
						Feeling/Activity
					</p>
				</div>
			</div>
			<button className="btn" onClick={getDocHandler}>
				get doc
			</button>
		</div>
	);
}
