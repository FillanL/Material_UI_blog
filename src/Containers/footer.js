import React from 'react';
import styled from "styled-components"

const Footer = (props) => {

	return (
		<FooterContainer >

				<svg
					width="165"
					height="93"
					viewBox="0 0 665 93"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.0781 3.75L36.6094 53.25L54.0469 3.75H72.5156V72H58.4062V53.3438L59.8125 21.1406L41.3906 72H31.7344L13.3594 21.1875L14.7656 53.3438V72H0.703125V3.75H19.0781ZM98.2031 72H84.6094V21.2812H98.2031V72ZM83.8125 8.15625C83.8125 6.125 84.4844 4.45312 85.8281 3.14062C87.2031 1.82812 89.0625 1.17188 91.4062 1.17188C93.7188 1.17188 95.5625 1.82812 96.9375 3.14062C98.3125 4.45312 99 6.125 99 8.15625C99 10.2188 98.2969 11.9062 96.8906 13.2188C95.5156 14.5312 93.6875 15.1875 91.4062 15.1875C89.125 15.1875 87.2812 14.5312 85.875 13.2188C84.5 11.9062 83.8125 10.2188 83.8125 8.15625ZM121.875 21.2812L122.297 27.1406C125.922 22.6094 130.781 20.3438 136.875 20.3438C142.25 20.3438 146.25 21.9219 148.875 25.0781C151.5 28.2344 152.844 32.9531 152.906 39.2344V72H139.359V39.5625C139.359 36.6875 138.734 34.6094 137.484 33.3281C136.234 32.0156 134.156 31.3594 131.25 31.3594C127.438 31.3594 124.578 32.9844 122.672 36.2344V72H109.125V21.2812H121.875ZM177.516 72H163.922V21.2812H177.516V72ZM163.125 8.15625C163.125 6.125 163.797 4.45312 165.141 3.14062C166.516 1.82812 168.375 1.17188 170.719 1.17188C173.031 1.17188 174.875 1.82812 176.25 3.14062C177.625 4.45312 178.312 6.125 178.312 8.15625C178.312 10.2188 177.609 11.9062 176.203 13.2188C174.828 14.5312 173 15.1875 170.719 15.1875C168.438 15.1875 166.594 14.5312 165.188 13.2188C163.812 11.9062 163.125 10.2188 163.125 8.15625ZM201.422 21.2812L201.844 26.9531C205.438 22.5469 210.297 20.3438 216.422 20.3438C222.953 20.3438 227.438 22.9219 229.875 28.0781C233.438 22.9219 238.516 20.3438 245.109 20.3438C250.609 20.3438 254.703 21.9531 257.391 25.1719C260.078 28.3594 261.422 33.1719 261.422 39.6094V72H247.828V39.6562C247.828 36.7812 247.266 34.6875 246.141 33.375C245.016 32.0312 243.031 31.3594 240.188 31.3594C236.125 31.3594 233.312 33.2969 231.75 37.1719L231.797 72H218.25V39.7031C218.25 36.7656 217.672 34.6406 216.516 33.3281C215.359 32.0156 213.391 31.3594 210.609 31.3594C206.766 31.3594 203.984 32.9531 202.266 36.1406V72H188.719V21.2812H201.422ZM301.266 72C300.641 70.7812 300.188 69.2656 299.906 67.4531C296.625 71.1094 292.359 72.9375 287.109 72.9375C282.141 72.9375 278.016 71.5 274.734 68.625C271.484 65.75 269.859 62.125 269.859 57.75C269.859 52.375 271.844 48.25 275.812 45.375C279.812 42.5 285.578 41.0469 293.109 41.0156H299.344V38.1094C299.344 35.7656 298.734 33.8906 297.516 32.4844C296.328 31.0781 294.438 30.375 291.844 30.375C289.562 30.375 287.766 30.9219 286.453 32.0156C285.172 33.1094 284.531 34.6094 284.531 36.5156H270.984C270.984 33.5781 271.891 30.8594 273.703 28.3594C275.516 25.8594 278.078 23.9062 281.391 22.5C284.703 21.0625 288.422 20.3438 292.547 20.3438C298.797 20.3438 303.75 21.9219 307.406 25.0781C311.094 28.2031 312.938 32.6094 312.938 38.2969V60.2812C312.969 65.0938 313.641 68.7344 314.953 71.2031V72H301.266ZM290.062 62.5781C292.062 62.5781 293.906 62.1406 295.594 61.2656C297.281 60.3594 298.531 59.1562 299.344 57.6562V48.9375H294.281C287.5 48.9375 283.891 51.2812 283.453 55.9688L283.406 56.7656C283.406 58.4531 284 59.8438 285.188 60.9375C286.375 62.0312 288 62.5781 290.062 62.5781ZM337.641 72H324.047V0H337.641V72ZM349.547 65.3438C349.547 63.1875 350.266 61.4375 351.703 60.0938C353.172 58.75 355 58.0781 357.188 58.0781C359.406 58.0781 361.234 58.75 362.672 60.0938C364.141 61.4375 364.875 63.1875 364.875 65.3438C364.875 67.4688 364.156 69.2031 362.719 70.5469C361.281 71.8594 359.438 72.5156 357.188 72.5156C354.969 72.5156 353.141 71.8594 351.703 70.5469C350.266 69.2031 349.547 67.4688 349.547 65.3438Z"
						fill="#395D78"
					/>
					<path
						d="M413.062 54.0938C413.062 51.4375 412.125 49.4062 410.25 48C408.375 46.5625 405 45.0625 400.125 43.5C395.25 41.9062 391.391 40.3438 388.547 38.8125C380.797 34.625 376.922 28.9844 376.922 21.8906C376.922 18.2031 377.953 14.9219 380.016 12.0469C382.109 9.14062 385.094 6.875 388.969 5.25C392.875 3.625 397.25 2.8125 402.094 2.8125C406.969 2.8125 411.312 3.70312 415.125 5.48438C418.938 7.23437 421.891 9.71875 423.984 12.9375C426.109 16.1562 427.172 19.8125 427.172 23.9062H413.109C413.109 20.7812 412.125 18.3594 410.156 16.6406C408.188 14.8906 405.422 14.0156 401.859 14.0156C398.422 14.0156 395.75 14.75 393.844 16.2188C391.938 17.6562 390.984 19.5625 390.984 21.9375C390.984 24.1562 392.094 26.0156 394.312 27.5156C396.562 29.0156 399.859 30.4219 404.203 31.7344C412.203 34.1406 418.031 37.125 421.688 40.6875C425.344 44.25 427.172 48.6875 427.172 54C427.172 59.9062 424.938 64.5469 420.469 67.9219C416 71.2656 409.984 72.9375 402.422 72.9375C397.172 72.9375 392.391 71.9844 388.078 70.0781C383.766 68.1406 380.469 65.5 378.188 62.1562C375.938 58.8125 374.812 54.9375 374.812 50.5312H388.922C388.922 58.0625 393.422 61.8281 402.422 61.8281C405.766 61.8281 408.375 61.1562 410.25 59.8125C412.125 58.4375 413.062 56.5312 413.062 54.0938ZM454.781 52.8281L464.156 21.2812H478.688L458.297 79.875L457.172 82.5469C454.141 89.1719 449.141 92.4844 442.172 92.4844C440.203 92.4844 438.203 92.1875 436.172 91.5938V81.3281L438.234 81.375C440.797 81.375 442.703 80.9844 443.953 80.2031C445.234 79.4219 446.234 78.125 446.953 76.3125L448.547 72.1406L430.781 21.2812H445.359L454.781 52.8281ZM496.5 21.2812L496.922 27.1406C500.547 22.6094 505.406 20.3438 511.5 20.3438C516.875 20.3438 520.875 21.9219 523.5 25.0781C526.125 28.2344 527.469 32.9531 527.531 39.2344V72H513.984V39.5625C513.984 36.6875 513.359 34.6094 512.109 33.3281C510.859 32.0156 508.781 31.3594 505.875 31.3594C502.062 31.3594 499.203 32.9844 497.297 36.2344V72H483.75V21.2812H496.5ZM554.062 8.8125V21.2812H562.734V31.2188H554.062V56.5312C554.062 58.4062 554.422 59.75 555.141 60.5625C555.859 61.375 557.234 61.7812 559.266 61.7812C560.766 61.7812 562.094 61.6719 563.25 61.4531V71.7188C560.594 72.5312 557.859 72.9375 555.047 72.9375C545.547 72.9375 540.703 68.1406 540.516 58.5469V31.2188H533.109V21.2812H540.516V8.8125H554.062ZM599.672 72C599.047 70.7812 598.594 69.2656 598.312 67.4531C595.031 71.1094 590.766 72.9375 585.516 72.9375C580.547 72.9375 576.422 71.5 573.141 68.625C569.891 65.75 568.266 62.125 568.266 57.75C568.266 52.375 570.25 48.25 574.219 45.375C578.219 42.5 583.984 41.0469 591.516 41.0156H597.75V38.1094C597.75 35.7656 597.141 33.8906 595.922 32.4844C594.734 31.0781 592.844 30.375 590.25 30.375C587.969 30.375 586.172 30.9219 584.859 32.0156C583.578 33.1094 582.938 34.6094 582.938 36.5156H569.391C569.391 33.5781 570.297 30.8594 572.109 28.3594C573.922 25.8594 576.484 23.9062 579.797 22.5C583.109 21.0625 586.828 20.3438 590.953 20.3438C597.203 20.3438 602.156 21.9219 605.812 25.0781C609.5 28.2031 611.344 32.6094 611.344 38.2969V60.2812C611.375 65.0938 612.047 68.7344 613.359 71.2031V72H599.672ZM588.469 62.5781C590.469 62.5781 592.312 62.1406 594 61.2656C595.688 60.3594 596.938 59.1562 597.75 57.6562V48.9375H592.688C585.906 48.9375 582.297 51.2812 581.859 55.9688L581.812 56.7656C581.812 58.4531 582.406 59.8438 583.594 60.9375C584.781 62.0312 586.406 62.5781 588.469 62.5781ZM641.062 36.4219L649.594 21.2812H664.078L649.641 46.125L664.688 72H650.156L641.109 56.0625L632.109 72H617.531L632.578 46.125L618.188 21.2812H632.719L641.062 36.4219Z"
						fill="#A9A6B5"
					/>
				</svg>

				
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.footer`
  width:100vw;
  padding:20px;
  background-color: gray;
`
