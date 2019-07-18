'use strict';

const {
	colors,
	CssBaseline,
	MuiThemeProvider,
	Typography,
	Container,
	makeStyles,
	createMuiTheme,
	Box,
	AppBar,
	Toolbar,
	SvgIcon,
	Link,

	Select,
	MenuItem,
	Input
} = MaterialUI;

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#FFF',
		},
		error: {
			main: colors.red.A400,
		},
		background: {
			default: '#0a1c3f',
		},
	},
});
const useStyles = makeStyles(theme => ({
	header: {
		color: 'white',
		top: 0,
		bottom: 'auto',
	},
	footer: {
		color: 'gray',
		top: 'auto',
		bottom: 0,
	},
	body: {
		minHeight: '60px',
		color: 'white',
		backgroundColor: "transparent",
		zIndex: "999",
		display: 'flex',
		margin: '20%',
		justifyContent: 'center'
	},
	root: {

	}
}));


function Header() {
	return (
		<Typography align="center" variant="h4" component="h1">
			React JS
		</Typography>
	);
}


const customStyles = {
	container: (base, state) => ({
		...base,
		opacity: 0,
		backgroundColor: "white",
		zIndex: "999"
	})
};

class SimpleSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 'coconut'};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('Your favorite flavor is: ' + this.state.value);
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick your favorite flavor:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
function Footer() {
	return (
		<Typography  align="center">
			{'Copyright © 2019  '}
			<Link color="inherit" href="https://linkedin.com/in/romulosanttos/">
				Rômulo Cabral Santos
			</Link>
		</Typography>
	);
}

function Body() {
	const classes = useStyles();
	return (
		<Typography component={'span'} variant={'body2'} className={classes.body}>
			<SimpleSelect/>
		</Typography>
	);
}


function App() {
	const classes = useStyles();
	return (

		<MuiThemeProvider theme={theme} >
			<CssBaseline />
			<div className={classes.root} >
				<AppBar position="static" color="primary" className={classes.header}>
					<Toolbar>
						<Header/>
					</Toolbar>
				</AppBar>

				<div>
					<Body/>
				</div>

				<AppBar position="fixed" color="secondary" className={classes.footer}>
					<Toolbar>
						<Footer/>
					</Toolbar>
				</AppBar>
			</div>

		</MuiThemeProvider>


	);
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
