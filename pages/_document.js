import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDoc extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="description"
						content="Rohy 2.0 using tailwindcss"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDoc;
