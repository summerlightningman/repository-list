import {FC} from "react";
import {ErrorProps} from "@pages/errors/types.ts";

import './style.scss'

const ErrorPage: FC<ErrorProps> = ({ text }) => {
    return <main className="error-page">
        <h1 className="error-page__text">{text}</h1>
    </main>
}

export default ErrorPage