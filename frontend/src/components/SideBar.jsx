import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
	const [state, setState] = useState(false);

	const handleSideBar = () => {
		setState(!state);
	};

	return (
		<aside className={state ? "sidebar open" : "sidebar"} onMouseLeave={handleSideBar}>
			<div className="top-sidebar mt-1 pt-1">
				<div className="channel-logo" onClick={handleSideBar}>
					{/* <img
						src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
						alt="Bootstrap"
						width="30"
						height="24"
						className="mx-1"
					/> */}
					<div className="material-symbols-outlined channel-symbol" title="Expand Sidebar">
						format_letter_spacing
					</div>
				</div>
				<div className="hidden-sidebar your-channel">Your channel</div>
				<div className="hidden-sidebar channel-name">Web Dev Simplified</div>
			</div>
			<div className="middle-sidebar">
				<ul className="sidebar-list">
					<li className="sidebar-list-item active">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								dashboard
							</div>
							<div className="hidden-sidebar">Dashboard</div>
						</Link>
					</li>
					<li className="sidebar-list-item active">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								public
							</div>
							<div className="hidden-sidebar">Public</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								post_add
							</div>
							<div className="hidden-sidebar">Post</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								forum
							</div>
							<div className="hidden-sidebar">Feed</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								group
							</div>
							<div className="hidden-sidebar">Friends</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								live_tv
							</div>
							<div className="hidden-sidebar">Watch</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								podcasts
							</div>
							<div className="hidden-sidebar">Podcasts</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								stadia_controller
							</div>
							<div className="hidden-sidebar">Games</div>
						</Link>
					</li>

					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								storefront
							</div>
							<div className="hidden-sidebar">Market</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								storage
							</div>
							<div className="hidden-sidebar">My Stuff</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								shield_lock
							</div>
							<div className="hidden-sidebar">Privacy & Security</div>
						</Link>
					</li>
				</ul>
			</div>
			<div className="bottom-sidebar">
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								settings
							</div>
							<div className="hidden-sidebar">Settings</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								tune
							</div>
							<div className="hidden-sidebar">Send Feedback</div>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default SideBar;
