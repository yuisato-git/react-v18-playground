import React, { FC, useState } from "react";
import { flushSync } from "react-dom";

export const AutoBatching: FC = () => {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);

	// React will only re-render once at the end (that's batching!)
	const handleClick = () => {
		setCount((c) => c + 1);
		setCount2((c) => c + 2);
		setCount3((c) => c + 3);
	};

	// React will re-render each state is updated (default of lower than v18 is this)
	const handleClickWithoutBatching = () => {
		flushSync(() => {
			setCount((c) => c + 1);
		});
		flushSync(() => {
			setCount2((c) => c + 1);
		});
		flushSync(() => {
			setCount3((c) => c + 1);
		});
	};

	console.log("rendered");

	return (
		<>
			<button onClick={handleClick}>Auto Batching</button>
			<button onClick={handleClickWithoutBatching}>No Batching</button>

			<p>Count is {count}</p>
			<p>Count2 is {count2}</p>
			<p>Count3 is {count3}</p>
		</>
	);
};
