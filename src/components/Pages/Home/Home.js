import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Button from "../../Button/Button";
import WorkContainer from "../PastWork/WorkContainer/WorkContainer";
import AboutContent from "../About/AboutContent/AboutContent";
import "./Home.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

function Home(props) {
	const { WorkList, MainSummary } = props;

	const [arr, setArr] = useState([]);

	const [matches, setMatches] = useState(false);

	useEffect(() => {
		var tempArr = [];
		while (tempArr.length < Math.min(3, WorkList.length)) {
			var r = Math.floor(Math.random() * WorkList.length);
			if (tempArr.indexOf(r) === -1) {
				tempArr.push(r);
			}
		}

		for (let i = 0; i < tempArr.length; ++i) {
			tempArr[i] = WorkList[tempArr[i]];
		}

		setArr(tempArr);

		setMatches(window.matchMedia("(max-width:768px)").matches);

		const handler = (e) => setMatches({ matches: e.matches });
		window.matchMedia("(max-width: 768px)").addListener(handler);
	}, []);

	if (matches) {
		return (
			<div id="HomeContainer">
				<Header></Header>
				<SimpleBar
					style={{ height: "100vh" }}
					forceVisible="y"
					autoHide={false}
				>
					<div className="mainContainer">
						{MainSummary.map((ms, key) => (
							<AboutContent
								type="Button"
								sideKey="-1"
								Title="About me"
								imgSrc="../images/AboutMePicture.jpg"
								imgAlt="Malcolm Baatjies"
								paragraph={ms.paragraph}
								buttonClassName="button bAboutContainer"
								buttonLinkTo="/About"
								buttonType="Navigation"
								buttonValue="More about me!"
							></AboutContent>
						))}
						<div className="PastWorkContainer">
							<h3>Some of my past work</h3>
							{arr.map((wl, key) => (
								<WorkContainer
									key={key}
									type="mainWork"
									sideKey={key}
									Title={wl.Title}
									Subtitle={wl.Subtitle}
									imgSrc={wl.imgSrc}
									imgAlt={wl.imgAlt}
									paragraph={wl.paragraph}
									buttonClassName={wl.buttonClassName}
									buttonLinkTo={wl.buttonLinkTo}
									buttonValue={wl.buttonValue}
								></WorkContainer>
							))}
							<Button
								type="Navigation"
								className="bPastWorkCont button"
								linkTo="/Past-Work"
								value="See more!"
								linePos="bottomLine"
							></Button>
						</div>
					</div>
					<Footer></Footer>
				</SimpleBar>
			</div>
		);
	} else {
		return (
			<div id="HomeContainer">
				<SimpleBar
					style={{ height: "100vh" }}
					forceVisible="y"
					autoHide={false}
				>
					<Header></Header>
					<div className="mainContainer">
						{MainSummary.map((ms, key) => (
							<AboutContent
								type="Button"
								sideKey="-1"
								Title="About me"
								imgSrc="../images/AboutMePicture.jpg"
								imgAlt="Malcolm Baatjies"
								paragraph={ms.paragraph}
								buttonClassName="button bAboutContainer"
								buttonLinkTo="/About"
								buttonType="Navigation"
								buttonValue="More about me!"
							></AboutContent>
						))}
						<div className="PastWorkContainer">
							<h3>Some of my past work</h3>
							{arr.map((wl, key) => (
								<WorkContainer
									key={key}
									type="mainWork"
									sideKey={key}
									Title={wl.Title}
									Subtitle={wl.Subtitle}
									imgSrc={wl.imgSrc}
									imgAlt={wl.imgAlt}
									paragraph={wl.paragraph}
									buttonClassName={wl.buttonClassName}
									buttonLinkTo={wl.buttonLinkTo}
									buttonValue={wl.buttonValue}
								></WorkContainer>
							))}
							<Button
								type="Navigation"
								className="bPastWorkCont button"
								linkTo="/Past-Work"
								value="See more!"
								linePos="bottomLine"
							></Button>
						</div>
					</div>
					<Footer></Footer>
				</SimpleBar>
			</div>
		);
	}
}

export default Home;
