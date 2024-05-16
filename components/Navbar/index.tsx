const Navbar = () => {
	return (
		<nav>
			<div>
				<h1 className="">Mentorizer</h1>
			</div>

			<ul>
				<li>
					<a href="#">Find Mentor / Internship</a>
				</li>
				<li>
					<a href="#">Start Mentoring</a>
				</li>
				<li>
					<a href="#">Join Groups</a>
				</li>
				<li>
					<a href="#">Post Internship</a>
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
