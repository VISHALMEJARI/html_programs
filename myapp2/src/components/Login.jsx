function Login(){
    return(
        <div>
            <h2>This is Login.jsx component</h2>
            <form>
                <label htmlFor="username">UserName </label>
                <input type="text" id="username"/><br/><br/>
                <label htmlFor="pass">Password </label>
                <input type="password" id="pass"/><br/><br/>
                <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    )
}
export default Login;