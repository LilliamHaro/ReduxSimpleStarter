import React from 'react';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
const biog = (text) => {
	return(
		<p>{text}</p>)
}
const Section = () => (
  <div>{biog}</div>
)

export default Section
