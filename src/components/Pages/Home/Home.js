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
						<AboutContent
							type="Button"
							sideKey="-1"
							Title="About me"
							imgSrc="../images/AboutMePicture.jpg"
							imgAlt="Malcolm Baatjies"
							paragraph={[
								"My name is Malcolm Baatjies. I am currently in my third year at The University of Cape Town studying a Bachelors in Science majoring in Computer Science and Computer Engineering. I have had a passion for Computers for most of my life. Some of my earliest memories include me exploring our family shared computer. From browsing around the operating system to exploring and trying to understand Excel games. This curiousity has followed me to this day. I am constantly trying to learn to new things and understand how more complex systems work.",
								"\nI have experimented with many different programming languages including Python, Java, C++, and JavaScript and I am eager to keep expanding this list. Currently my personal interest is in web design and specifically React. I plan on pursuing an Honours degree in 2022 however future personal projects include new websites and mobile applications.",
								"\nI am a very results driven person and I pride myself on going above and beyond the expectations of the project. I work well in a team and can often take charge and delegate responsibilities but also know when to step back and follow someone elses lead. I respect authority very well, but will also speak my mind and present my own ideas if the moment calls for it. To see more about my education and aspirations click the button below to navigate to the about tab",
							]}
							buttonClassName="button bAboutContainer"
							buttonLinkTo="/About"
							buttonType="Navigation"
							buttonValue="More about me!"
						></AboutContent>
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
