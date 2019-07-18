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

	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl
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
	}
}));

const getInfoAPI = () =>{
	return  [
		{"nome": "Item 1", "valor": 1},
		{"nome": "Item 2", "valor": 2},
		{"nome": "Item 2", "valor": 2},
		{"nome": "Item 3", "valor": 3},
		{"nome": "Item 4", "valor": 4},
		{"nome": "Item 5", "valor": 5},
		{"nome": "Item 6", "valor": 6},
		{"nome": "Item 7", "valor": 7},
		{"nome": "Item 8", "valor": 8}
	].filter(function (a) {
		return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
	}, {})
};

class SimpleSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectOptions: getInfoAPI(),
			selectedValue: "selecione uma alternativa"
		};
	}

	renderSelectOptions = () => {
		return this.state.selectOptions.map((dt, i) => (
			<MenuItem key={dt.valor} value={dt.valor}>
				{dt.nome}
			</MenuItem>
		));
	};

	handleChange = event => {
		this.setState({ selectedValue: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const data = getInfoAPI();
		this.setState({ selectOptions: data });

	};

	render() {
		return (
			<form autoComplete="off" onSubmit={this.handleSubmit} >
				<FormControl style={{width: '25vh',background: '#FFF'}}>
					<InputLabel style={{background: 'gray',fontSize: 16}} htmlFor="items">Items</InputLabel>
					<Select style={{width: '25vh',background: '#FFF'}} inputProps={{
							id: 'items',
					}} value={this.state.selectedValue} onChange={this.handleChange}>
							{this.renderSelectOptions()}
					</Select>
					<Button type="submit" variant="contained" color="primary" >
						Forçar atualização
					</Button>
				</FormControl>
			</form>
		);
	}
}

const Header = ()=> {
	return (
		<Typography align="center" variant="h4" component="h1">
			React JS
		</Typography>
	);
};

const Footer = () =>  {
	return (
		<Typography  align="center">
			{'Copyright © 2019  '}
			<Link color="inherit" href="https://linkedin.com/in/romulosanttos/">
				Rômulo Cabral Santos
			</Link>
		</Typography>
	);
};

const Body = () => {
	const classes = useStyles();
	return (
		<Typography component={'span'} variant={'body2'} className={classes.body}>
			<SimpleSelect/>
		</Typography>
	);
};


const App = ()=> {
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
};

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
