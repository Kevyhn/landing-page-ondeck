import '../css/Modal.css';
import React from 'react';
import CloseIcon from '../Assets/Close.svg';
import SpenseIcon from '../Assets/Spense_Icon.svg';
import FiberIcon from '../Assets/Fiber_Icon.svg';
import GradieIcon from '../Assets/Gradie_Icon.svg';

export function Modal({modal, setModal}) {

	const closeMenu = () => setModal(false);
	
	return (
		<div className={modal ? 'modal modal-open' : 'modal'}>
			<div className="products">
				<h4>Products</h4>
				<div className="close" onClick={closeMenu}>
					<img src={CloseIcon} alt="icon"/>
				</div>
			</div>
			<div className="product">
				<div className="icon">
					<img src={SpenseIcon} alt="icon"/>
				</div>
				<div className="description">
					<h4>Spense</h4>
					<p>Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.</p>
				</div>
			</div>
			<div className="product">
				<div className="icon">
					<img src={FiberIcon} alt="icon"/>
				</div>
				<div className="description">
					<h4>Fiber Landing Page</h4>
					<p>An online portfolio generator. Great to practice flex/grid layouts, and absolute positioning.</p>
				</div>
			</div>
			<div className="product">
				<div className="icon">
					<img src={GradieIcon} alt="icon"/>
				</div>
				<div className="description">
					<h4>Gradie Sign Up Page</h4>
					<p>Gradie is a simple sign up page, great to practice centering layouts.</p>
				</div>
			</div>
		</div>
	);
}