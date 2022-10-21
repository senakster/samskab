import React from "react"
import { Trans } from "react-i18next"
import logos from "_media/img/logo"

const PageTitle: React.FC<{page: string}> = ({page}) => {
    return (
    <h1 className="page_title">
        {/* <img alt="main logo" src={logos.logo1HvidKvadrat.url} className={`inline-hImg`} /> */}
            <Trans ns={`${page.toLowerCase()}`} i18nKey="title">
                {page}
            </Trans>
        </h1>
    )
}

export default PageTitle