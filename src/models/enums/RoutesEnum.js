class RoutesEnum {
     static homePath = "/";
     static signIn = "/sign-in";
     static signUp = "/sign-up";
     static navigate(props, path, params = {}) {
        props.history.push(path, params);
    }
}

export default RoutesEnum;
