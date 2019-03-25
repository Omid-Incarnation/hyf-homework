import React, * as react from 'react'

const fetchUser = (username) => fetch(`https://api.github.com/users/${username}`).then(response => response.json())

export default class Profile extends react.Component {
    state = {
        data: undefined,
        loading: true
    }

    componentDidMount() {
        const name = this.props.match.params.username;
        fetchUser(name).then(response => this.setState({data: response, loading: false}))
        // window.location.replace(`https://github.com/${name}`)
    }
    render() {
        const name = this.props.match.params.username;
        const {data, loading} = this.state
        return (
            <div>
                {loading
                    ? <h2>fetching {name}' data</h2>
                    : <div className="avatar-info">
                        <img src={data.avatar_url} alt={data.login}/>
                        <p>{data.name}</p>
                    </div>
            } </div>
        )
    }
}
