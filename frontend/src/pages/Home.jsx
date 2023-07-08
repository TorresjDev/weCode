import React from "react";

function Home({ user }) {
	return (
		<div className="container-fluid">
			{!user.isLoggedIn ? (
				<main>
					<section className="hero">
						<div className="container">
							<div className="row text-center">
								<h1>Welcome to Our Landing Page</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
					</section>

					<section className="features">
						<div className="container">
							<h2>Key Features</h2>
							<div className="row">
								<div className="col-md-4"></div>
								<div className="col-md-4"></div>
								<div className="col-md-4"></div>
							</div>
						</div>
					</section>

					<section className="testimonial">
						<div className="container">
							<h2>Testimonials</h2>
							<div className="row">
								<div className="col-md-6"></div>
								<div className="col-md-6"></div>
							</div>
						</div>
					</section>
				</main>
			) : (
				<main>
					<section className="hero">
						<div className="container">
							<div className="row text-center">
								<h1>Welcome to Our Landing Page</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
					</section>

					<section className="features">
						<div className="container">
							<h2>Key Features</h2>
							<div className="row">
								<div className="col-md-4"></div>
								<div className="col-md-4"></div>
								<div className="col-md-4"></div>
							</div>
						</div>
					</section>

					<section className="testimonial">
						<div className="container">
							<h2>Testimonials</h2>
							<div className="row">
								<div className="col-md-6"></div>
								<div className="col-md-6"></div>
							</div>
						</div>
					</section>
				</main>
			)}
		</div>
	);
}

export default Home;
