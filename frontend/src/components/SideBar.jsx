import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar({ user }) {
	const [state, setState] = useState(false);

	const handleSideBar = () => {
		setState(true);
	};

	return (
		<aside className={state ? "sidebar open" : "sidebar"} onMouseLeave={() => setState(false)}>
			<div className="top-sidebar mt-1 pt-1">
				<div className="channel-logo" onClick={handleSideBar}>
					<div className="channel-symbol" title="Expand Sidebar">
						<div className="material-symbols-outlined " title="Expand Sidebar">
							format_letter_spacing
						</div>
					</div>
				</div>
				<div className="hidden-sidebar your-channel">{user.fullName}</div>
				<div className="hidden-sidebar channel-name">weCode</div>
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
					<li className="sidebar-list-item ">
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
							<div className="hidden-sidebar">Message</div>
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
