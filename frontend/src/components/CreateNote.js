import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';




export default class CreateNote extends Component {


    state = {
        users: [],
        userSelected: "",
        date: new Date(),
        content:"",
        title:""
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data.map(user => user.userName) });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.title, this.state.content);
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onChangeDate = date => {
        this.setState({ date });
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">

                <div className="card card-body">
                    <h4>Create note</h4>
                    {/*Select user*/}

                    <div className="form-group">

                        <select className="form-control" name="userSelected" onChange={this.onInputChange}>
                            {
                                this.state.users.map(user => (
                                    <option key={user} value={user}>
                                        {user}
                                    </option>))
                            }
                        </select>

                    </div>
                    {/* Note title */}
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Title" name="title" onChange={this.onInputChange} required />
                    </div>

                    {/* Note content */}
                    <div className="form-group">
                        <textarea name="content" className="form-control" onChange={this.onInputChange} placeholder="Content">

                        </textarea>
                    </div>

                    {/* Note Date */}
                    <div className="form-group">
                        <DatePicker className="form-control" selected={this.state.date} onChange={this.onChangeDate} />
                    </div>

                    <form onSubmit={this.onSubmit}>

                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>

            </div>
        )
    }
}
