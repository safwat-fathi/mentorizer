const Navbar = () => {
	return (
		<nav>
			<div>
				<h1 className="">Mentorizer</h1>
			</div>

			<ul>
				<li>
					<a href="#">find (Mentor - Internship - Study Group)</a>
				</li>
				<li>
					<a href="#">be a mentor</a>
				</li>
				<li>
					<a href="#">join groups</a>
				</li>
				<li>
					<a href="#">Post Internship</a>
				</li>
				<li>
					<a href="#">Give us your feedback</a>
				</li>
			</ul>

			<div>
				<button>Log In</button>
				<button>Sign Up</button>
			</div>
		</nav>
	);
};

export default Navbar;
