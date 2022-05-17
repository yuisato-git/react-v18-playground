import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";

type Comment = {
	postId: string;
	id: string;
	name: string;
	email: string;
	body: string;
};

// FIXME: Suspenseが正常に表示されない。
export const SuspenseSample = () => {
	const [comments, setComments] = useState<Comment[]>([]);

	useEffect(() => {
		const baseURL = "https://jsonplaceholder.typicode.com/comments";
		fetch(baseURL)
			.then((resp) => resp.json())
			.then((data) => setComments(data));
	}, []);

	return (
		<>
			<UpperColumn>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
					quis nibh leo. Donec vestibulum justo ac leo fringilla dapibus.
					Vivamus quis neque ultricies, pharetra lorem ut, varius tellus.
					Quisque erat ligula, hendrerit placerat eleifend vitae, mattis a
					dolor. Nullam non consequat est. Donec at ipsum ut nisi aliquam
					suscipit. Donec iaculis quam sit amet metus ultrices sagittis. Proin
					mi turpis, efficitur non lectus vitae, convallis dapibus sapien.
				</p>
			</UpperColumn>
			<BottomColumn>
				<Suspense fallback={<p>Loading...</p>}>
					{comments.map((comment) => (
						<CommentItem key={comment.id}>
							<p>{comment.body}</p>
						</CommentItem>
					))}
				</Suspense>
			</BottomColumn>
		</>
	);
};

const UpperColumn = styled.div`
	background: skyblue;
`;

const BottomColumn = styled.div`
	background: orange;
`;

const CommentItem = styled.div``;
