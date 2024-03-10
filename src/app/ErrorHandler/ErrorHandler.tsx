import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";
import { Error } from "shared/UIkit/Error";

interface State {
    hasError: boolean
}

export class ErrorHandler extends Component<PropsWithChildren, State> {
    constructor(props: PropsWithChildren) {
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError() {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(error, errorInfo);
    }

    render(): ReactNode {
        const {hasError} = this.state;
        const {children} = this.props;

        if(hasError) {
            return <Error error={{status: 'Unknown', message: 'Opps something went wrong'}}/>
        }

        return children;
    }
}