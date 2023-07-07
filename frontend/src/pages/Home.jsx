import React from "react";

function Home() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-8">
					<main>
						<section class="hero">
							<div class="container">
								<h1>Welcome to Our Landing Page</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</section>

						<section class="features">
							<div class="container">
								<h2>Key Features</h2>
								<div class="row">
									<div class="col-md-4"></div>
									<div class="col-md-4"></div>
									<div class="col-md-4"></div>
								</div>
							</div>
						</section>

						<section class="testimonial">
							<div class="container">
								<h2>Testimonials</h2>
								<div class="row">
									<div class="col-md-6"></div>
									<div class="col-md-6"></div>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default Home;
