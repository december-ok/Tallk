import { useEffect, useRef } from 'react';

function ScreenCapture() {
	const video = useRef();

	async function startCapture(displayMediaOptions, video) {
		let ret;
		try {
			video.current.srcObject = await navigator.mediaDevices.getDisplayMedia(
				displayMediaOptions
			);
		} catch (err) {
			console.error('Error: ' + err);
		}
	}

	useEffect(() => {
		startCapture({ audio: true, video: true }, video);
		console.log(video);
	});

	return (
		<div className="ScreenCapture">
			<video autoPlay ref={video} />
		</div>
	);
}

export default ScreenCapture;
