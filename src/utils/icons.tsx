import { ArrowLeft, Cog, Landmark, Image, LayoutDashboard, User, Undo } from "lucide-react"
import React from "react";

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
    arrowLeft: ArrowLeft,
    avatar: User,
    placeholder: Image,
    dashboard: LayoutDashboard,
    settings: Cog,
    organization : Landmark,
    back : Undo,
    close: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    ),
    check: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    ),
    confetti: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5.8 11.3 2 22l10.7-3.79" />
            <path d="M4 3h.01" />
            <path d="M22 8h.01" />
            <path d="M15 2h.01" />
            <path d="M22 20h.01" />
            <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
            <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
            <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
            <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
        </svg>
    ),
    authentication: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" r=".5" />
        </svg>
    ),
    database: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" r=".5" />
        </svg>
    ),
    brush: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" r=".5" />
        </svg>
    ),
    pen: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" r=".5" />
        </svg>
    ),
    user: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
    ),
    email: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" r=".5" />
        </svg>
    ),
    creditCard: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" r=".5" />
        </svg>
    ),
    menuToggle: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m16 10-4 4-4-4" />
        </svg>
    ),
    sun: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    ),
    moon: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    ),
    login: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
        </svg>
    ),
    logout: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    google: ({ ...props }: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" aria-label="Google" {...props}>
            <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
        </svg>
    ),
    googleTranslate : ({ ...props }: IconProps) => (
        <svg width="64" height="100" viewBox="0 0 64 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="64" height="100" fill="url(#pattern0_120_106)" />
            <defs>
                <pattern id="pattern0_120_106" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_120_106" transform="matrix(0.01 0 0 0.0064 0 0.18)" />
                </pattern>
                <image id="image0_120_106" width="100" height="100"
                       xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    ),
    voiceWave : ({ ...props }: IconProps) => (
        <svg width="54" height="62" viewBox="0 0 54 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="54" height="62" fill="url(#pattern0_120_109)" />
            <defs>
                <pattern id="pattern0_120_109" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_120_109" transform="matrix(0.01 0 0 0.00870968 0 0.0645161)" />
                </pattern>
                <image id="image0_120_109" width="100" height="100"
                       xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    ),
    textIcon : ({ ...props }: IconProps) => (
        <svg width="47" height="62" viewBox="0 0 47 62" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props }
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="47" height="62" fill="url(#pattern0_120_108)" />
            <defs>
                <pattern id="pattern0_120_108" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_120_108" transform="matrix(0.01 0 0 0.00758065 0 0.120968)" />
                </pattern>
                <image id="image0_120_108" width="100" height="100"
                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJUlEQVR4nO2aTWojMRQGdRjrXCGtzVw97rnBMD8wuzhgCIld9Z6+gl5k96VKMrjxGCGEEMKTmev8W/G5HNdfc/18Gd2gxc4vPdc/l+P8MTrBSz0TpVeQs9dNuf3nhpzZPUqfIGePKOWDHNfft39fjusxqlI9yGW9vX6IUvmmVA8yxhitonQI0ipKlyBtonQK0iJKtyDlo3QMUjpK1yBlo3QOUjJK9yDlouwQpFSUXYKUibJTkBJRdguij7JjEHWUXYNoo+wcRBmlepD5qOd/JOB3Xwly3v0xXoJYbgj1iYEP+CQJshmTPqD4ABm4D3yADNwHPkAG7gMfIAP3gQ+QgfvAB8jAfeADZOA+8AEycB/4ABm4D3yADNwHPkAG7uOrA579sm8++G1tgqwEyQ25Q27Iyg1xnQgZuA98gAzcBz5ABu4DHyAD94EPkIH7wAfIwH3gA2TgPvABMnAf1d9lDZkPfECCfDMJ8p7ckJWPLNeJkIH7wAfIwH3gA2TgPvABMnAf+AAZuA98gAzcBz5ABu4DHyAD91H9m/r85nddCbISJDfkDrkhKzfEdSJk4D7wATJwH/gAGbgPfIAM3Ac+QAbuAx8gA/eBD5CB+8AHyMB94ANk4D7wATJwH/gAGbgPfIAM3Ac+QAbuAx8gA/eBD5CB+8AHyMB94ANk4D7wATJwH/gAGbgPfIAM3MftgDxngkzxQcgNWXyEBFm8eE2QEEIIY3f+AQ+vcFlcq9GYAAAAAElFTkSuQmCC" />
            </defs>
        </svg>
    ),
    twitter: ({...props}: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 462.799">
            <path
                  d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/>
        </svg>
    ),
    tiktok: ({...props}: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 449.45 515.38">
            <path fill-rule="nonzero"
                  d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"/>
        </svg>
    ),
    linkedIn: ({...props}: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
             viewBox="0 0 511 512">
            <path
                d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                data-original="#000000"/>
        </svg>
    ),
    instagram : ({...props} : IconProps)=> (
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
             viewBox="0 0 24 24">
            <path
                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
            </path>
        </svg>
    ),
    mail : ({...props} : IconProps)=> (
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
             viewBox="0 0 479.058 479.058">
            <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000"/>
        </svg>
    ),
    facebook: ({...props}: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
             viewBox="0 0 24 24">
            <path
                d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                data-original="#000000"/>
        </svg>
    ),
    discord: ({...props}: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
            <path
                fill="currentColor"
                d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
            />
        </svg>
    ),
    spinner: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    ),
    paperPlane: (props: IconProps) => (
        <svg
            {...props}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    ),
    next: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 512 104"
            version="1.1"
            preserveAspectRatio="xMidYMid"
            className="h-7 w-auto md:h-10"
        >
            <path
                d="M429.54331,0.0429770721 L429.54331,16.5035533 L394.165929,16.5035533 L394.165929,103.100426 L376.475939,103.100426 L376.475939,16.5035533 L340.361746,16.5035533 L340.361746,0.0429770721 L429.54331,0.0429770721 Z M433.519756,93.2825015 C434.76597,93.2825015 435.856244,93.7313462 436.778883,94.6289056 C437.714518,95.526465 438.181036,96.6012751 438.19403,97.8532061 C438.181036,98.703464 437.96532,99.4828995 437.533888,100.179687 C437.090761,100.88843 436.528081,101.443574 435.819858,101.845117 C435.124629,102.258485 434.357929,102.470952 433.519756,102.470952 C432.224162,102.470952 431.122193,102.022238 430.199553,101.124678 C429.276914,100.227119 428.820792,99.1404832 428.832487,97.8532061 C428.820792,96.6012751 429.276914,95.526465 430.199553,94.6289056 C431.122193,93.7313462 432.224162,93.2825015 433.519756,93.2825015 Z M82.9163208,103.100426 L17.6888203,22.0284751 L17.6888203,103.057413 L0,103.057413 L0,0 L22.1109929,0 L104.516873,102.328528 L104.518173,16.5035533 L104.510765,0.0429770721 L193.691939,0.0429770721 L193.691939,16.5035533 L122.206993,16.5035533 L122.206993,42.9835695 L179.695107,42.9835695 L179.695107,59.4441096 L122.206993,59.4441096 L122.206993,86.6398863 L193.691939,86.6398863 L193.691939,103.100426 L82.9163208,103.100426 Z M250.384893,59.2866112 L261.977665,73.7004508 L238.222944,103.222059 L215.007513,103.222059 L250.384893,59.2866112 Z M238.222944,0.085959602 L268.152853,37.2560569 L297.989198,0.200360934 L321.139655,0.164585909 L279.743025,51.6501442 L321.205929,103.14344 L297.989198,103.14344 L215.073787,0.085959602 L238.222944,0.085959602 Z M463.710863,59.0558213 L471.549401,59.0558213 L471.549401,89.2551147 C471.537706,92.0305706 470.93734,94.4044832 469.763898,96.4005036 C468.577462,98.3963939 466.934904,99.9197888 464.825827,100.994599 C462.728447,102.057454 460.271107,102.600902 457.478497,102.600902 C454.924995,102.600902 452.636589,102.140231 450.598985,101.242672 C448.561381,100.345113 446.943513,98.9987086 445.757076,97.2271107 C444.557645,95.4555127 443.970274,93.2470254 443.970274,90.6015188 L451.821807,90.6015188 C451.833503,91.7589766 452.097299,92.7627046 452.600203,93.601267 C453.103107,94.4398294 453.798335,95.0774904 454.685888,95.526335 C455.583838,95.9751797 456.615635,96.199602 457.777381,96.199602 C459.036589,96.199602 460.115168,95.9397036 460.989726,95.4082112 C461.864284,94.8885442 462.536122,94.1091086 463.003939,93.0697746 C463.458761,92.0423959 463.699168,90.7668142 463.710863,89.2551147 L463.710863,59.0558213 Z M503.801503,70.8662579 C503.610477,69.0356629 502.771005,67.6066112 501.309076,66.5909279 C499.834152,65.5634193 497.929096,65.0555777 495.59131,65.0555777 C493.950051,65.0555777 492.536203,65.3036508 491.361462,65.7878416 C490.186721,66.2838579 489.275777,66.9451695 488.65202,67.783732 C488.029563,68.6222944 487.717685,69.5789807 487.692995,70.6537909 C487.692995,71.5513503 487.908711,72.3307858 488.328447,72.980402 C488.748183,73.6417137 489.310863,74.1968569 490.042477,74.6457015 C490.761096,75.1062416 491.564183,75.484134 492.440041,75.7912041 C493.326294,76.0982741 494.213848,76.3581726 495.100102,76.5707695 L499.187005,77.5746274 C500.829563,77.9525198 502.424041,78.4604914 503.945746,79.1099777 C505.467452,79.7477685 506.846213,80.5626802 508.056041,81.5428873 C509.267168,82.5232244 510.226193,83.704203 510.933117,85.0860832 C511.640041,86.4678335 512,88.0858315 512,89.9519025 C512,92.4674599 511.352853,94.6760772 510.045563,96.5893198 C508.739574,98.4907371 506.857909,99.9789157 504.388873,101.053726 C501.931533,102.116711 498.959594,102.659898 495.460061,102.659898 C492.080081,102.659898 489.131533,102.140361 486.650802,101.101027 C484.158376,100.073519 482.215635,98.5616893 480.813482,96.5774944 C479.41133,94.5934294 478.656325,92.1722152 478.548467,89.3259371 L486.315533,89.3259371 C486.423391,90.8139858 486.902904,92.0542213 487.717685,93.0580792 C488.544162,94.0501117 489.622741,94.7823756 490.941726,95.2783919 C492.272406,95.7625827 493.757726,96.0106558 495.400284,96.0106558 C497.114315,96.0106558 498.624325,95.7507574 499.930315,95.2429157 C501.224609,94.7350741 502.243411,94.0265909 502.975025,93.1053807 C503.718335,92.195866 504.08999,91.1211858 504.101685,89.8929056 C504.08999,88.7709239 503.753421,87.8377584 503.106274,87.1054944 C502.447431,86.3733604 501.536487,85.7592203 500.373442,85.2632041 C499.2,84.7671878 497.832934,84.3183431 496.274843,83.9286254 L491.313381,82.6766944 C487.729381,81.7673096 484.88869,80.3855594 482.814701,78.5313137 C480.730315,76.677068 479.698518,74.2205076 479.698518,71.1379817 C479.698518,68.610599 480.393746,66.3902863 481.797198,64.4887391 C483.186355,62.5873218 485.092711,61.1109685 487.50197,60.0598091 C489.922924,58.9969543 492.655756,58.4771574 495.699168,58.4771574 C498.791959,58.4771574 501.500102,58.9969543 503.837888,60.0598091 C506.174376,61.1109685 508.009259,62.5754964 509.33864,64.4414376 C510.66932,66.3075086 511.364548,68.4451736 511.400934,70.8662579 L503.801503,70.8662579 Z"
                fill="currentColor"
            />
        </svg>
    ),
    authJs: (props: IconProps) => (
        <svg
            {...props}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            preserveAspectRatio="xMidYMid"
            className="h-7 w-auto scale-[180%] md:h-10 md:scale-[160%]"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    ),
    planetScale: (props: IconProps) => (
        <svg
            {...props}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 5666.000000 908.000000"
            preserveAspectRatio="xMidYMid"
            className="h-7 w-auto md:h-10"
        >
            <g
                transform="translate(0.000000,908.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
            >
                <path d="M4195 9073 c-217 -15 -534 -68 -775 -128 -1775 -446 -3127 -1953 -3379 -3766 -36 -259 -44 -411 -38 -731 7 -402 40 -658 132 -1028 186 -742 584 -1464 1102 -2000 l92 -95 1608 1608 1608 1607 560 0 560 0 -1864 -1864 -1864 -1864 74 -49 c138 -93 323 -200 495 -286 l171 -85 3006 3006 3006 3007 -79 159 c-591 1182 -1662 2049 -2934 2376 -402 103 -717 141 -1155 138 -152 -1 -298 -3 -326 -5z" />
                <path d="M11480 4595 l0 -3105 440 0 440 0 0 965 0 965 724 0 c786 0 845 3 1071 57 898 212 1539 929 1626 1819 14 144 6 416 -16 564 -72 477 -263 877 -570 1199 -277 288 -603 480 -984 575 -252 64 -159 60 -1503 63 l-1228 4 0 -3106z m2420 2308 c267 -66 471 -183 658 -378 247 -257 375 -561 388 -920 15 -388 -116 -728 -388 -1010 -194 -202 -414 -326 -686 -386 -94 -22 -122 -22 -804 -26 l-708 -4 0 1376 0 1376 728 -4 c697 -3 730 -4 812 -24z" />
                <path d="M16230 4595 l0 -3105 440 0 440 0 0 3105 0 3105 -440 0 -440 0 0 -3105z" />
                <path d="M33200 6920 l0 -780 -340 0 -340 0 0 -380 0 -380 340 0 340 0 0 -1414 c0 -892 4 -1452 10 -1517 54 -547 394 -914 962 -1040 120 -27 451 -37 595 -19 186 23 418 94 538 165 l45 26 -93 115 c-106 131 -198 273 -270 419 -28 55 -51 101 -52 102 0 1 -25 -5 -55 -13 -85 -24 -318 -29 -410 -10 -197 42 -311 157 -366 371 -17 65 -18 159 -21 1443 l-4 1372 491 0 490 0 0 380 0 380 -490 0 -490 0 0 780 0 780 -440 0 -440 0 0 -780z" />
                <path d="M37380 7694 c-331 -38 -564 -96 -817 -204 -224 -97 -406 -216 -575 -379 -330 -317 -498 -708 -498 -1161 0 -621 313 -1082 950 -1401 239 -119 395 -171 1045 -349 652 -178 832 -239 1020 -347 303 -174 445 -390 445 -676 0 -235 -83 -433 -254 -603 -101 -100 -177 -154 -311 -219 -437 -212 -1092 -218 -1534 -14 -245 114 -441 312 -527 537 l-28 72 -488 0 -489 0 7 -37 c68 -383 280 -750 575 -998 317 -265 712 -430 1222 -507 124 -19 185 -22 482 -22 357 -1 450 7 690 55 786 157 1332 608 1511 1249 49 174 58 252 58 480 0 232 -13 321 -70 496 -176 542 -699 956 -1492 1183 -76 22 -306 83 -512 136 -206 54 -433 116 -505 140 -404 133 -660 310 -788 545 -103 190 -109 444 -15 658 58 131 189 285 317 371 243 165 552 242 911 228 301 -12 552 -88 765 -230 85 -57 233 -211 281 -293 44 -74 104 -213 104 -238 0 -14 51 -16 490 -16 474 0 490 1 490 19 0 10 -11 56 -24 102 -112 386 -408 765 -806 1031 -204 136 -502 267 -747 328 -208 51 -306 62 -583 65 -146 2 -281 1 -300 -1z" />
                <path d="M50600 4595 l0 -3105 440 0 440 0 0 3105 0 3105 -440 0 -440 0 0 -3105z" />
                <path d="M19775 6264 c-16 -2 -73 -9 -125 -15 -192 -22 -410 -77 -594 -151 -795 -316 -1332 -1010 -1477 -1906 -26 -162 -37 -549 -20 -702 92 -811 573 -1486 1316 -1851 237 -116 450 -184 716 -230 157 -27 515 -37 670 -20 543 62 994 322 1276 738 l58 85 3 -361 2 -361 440 0 440 0 0 2330 0 2330 -440 0 -440 0 -2 -331 -3 -331 -43 62 c-63 89 -224 253 -327 333 -338 261 -761 390 -1264 386 -86 -1 -169 -4 -186 -5z m469 -815 c519 -67 969 -395 1201 -874 263 -546 224 -1182 -103 -1671 -244 -364 -613 -610 -1046 -696 -159 -32 -426 -31 -576 1 -319 68 -563 202 -801 440 -196 196 -315 385 -403 640 -66 191 -80 279 -81 521 0 186 3 230 23 328 33 163 73 279 152 437 85 171 188 312 331 450 125 121 235 200 383 275 288 145 580 193 920 149z" />
                <path d="M25165 6259 c-249 -26 -508 -111 -700 -229 -137 -84 -287 -214 -376 -325 l-44 -55 -5 247 -5 248 -437 3 -438 2 0 -2330 0 -2330 464 0 465 0 4 1373 c4 1483 2 1436 58 1664 115 471 413 791 835 898 241 62 535 51 774 -27 335 -109 559 -386 650 -804 54 -250 53 -212 57 -1711 l4 -1393 440 0 439 0 0 1418 c0 1456 -3 1597 -41 1820 -146 876 -763 1444 -1663 1531 -125 13 -363 12 -481 0z" />
                <path d="M29881 6259 c-792 -89 -1494 -596 -1847 -1334 -118 -249 -187 -478 -231 -770 -25 -172 -25 -557 0 -710 91 -544 334 -1007 733 -1395 355 -345 747 -549 1229 -641 139 -27 481 -37 636 -20 340 39 702 162 974 331 412 257 750 646 948 1095 24 55 47 110 51 123 l7 22 -439 0 -440 0 -36 -61 c-178 -300 -491 -543 -831 -648 -174 -53 -261 -65 -460 -65 -262 1 -425 39 -660 154 -310 153 -569 424 -730 763 -47 99 -115 281 -115 308 0 5 728 10 1918 11 l1917 3 8 45 c15 88 20 523 8 646 -59 578 -307 1099 -707 1484 -363 349 -807 566 -1324 645 -126 20 -488 28 -609 14z m504 -814 c516 -80 986 -454 1170 -930 37 -95 85 -271 85 -311 l0 -24 -1486 0 -1486 0 7 53 c9 67 48 202 86 297 127 318 405 612 733 777 160 80 379 141 566 157 69 5 225 -4 325 -19z" />
                <path d="M42307 6259 c-1075 -114 -1906 -921 -2087 -2029 -99 -606 5 -1192 298 -1687 376 -634 1011 -1052 1745 -1148 137 -18 442 -20 585 -4 798 86 1475 551 1851 1269 51 98 131 272 131 286 0 2 -223 4 -495 4 l-494 0 -41 -70 c-175 -299 -464 -533 -780 -630 -165 -51 -258 -64 -450 -64 -192 0 -282 12 -450 64 -507 156 -908 629 -1019 1201 -85 444 -17 921 183 1272 147 258 377 476 628 595 351 167 804 194 1158 70 295 -104 534 -307 723 -615 l50 -83 494 0 c291 0 493 4 493 9 0 23 -76 203 -130 311 -395 774 -1237 1266 -2155 1259 -88 -1 -195 -5 -238 -10z" />
                <path d="M47210 6263 c-444 -44 -807 -167 -1134 -383 -586 -387 -945 -971 -1063 -1730 -25 -163 -25 -630 0 -775 43 -248 107 -444 212 -660 336 -687 1001 -1168 1806 -1306 157 -27 515 -37 670 -20 551 63 1006 328 1285 750 l49 74 3 -361 2 -362 440 0 440 0 0 2330 0 2330 -440 0 -440 0 0 -331 0 -331 -69 89 c-37 48 -118 136 -178 194 -346 333 -822 503 -1392 497 -86 0 -172 -3 -191 -5z m366 -803 c506 -41 922 -279 1195 -684 286 -423 365 -983 208 -1469 -40 -126 -145 -332 -226 -447 -87 -122 -262 -296 -383 -382 -182 -129 -406 -225 -632 -270 -159 -31 -427 -32 -574 0 -151 33 -246 66 -389 137 -440 218 -764 643 -877 1151 -19 85 -22 129 -22 319 0 192 3 233 22 324 78 357 232 642 474 877 295 287 613 424 1054 453 12 0 79 -4 150 -9z" />
                <path d="M54011 6259 c-400 -45 -802 -206 -1131 -453 -123 -92 -311 -275 -413 -401 -379 -470 -575 -1073 -554 -1700 20 -595 264 -1154 697 -1598 366 -377 781 -602 1285 -698 139 -27 481 -37 636 -20 427 49 821 205 1169 465 136 101 367 336 475 483 131 178 286 462 329 601 l7 22 -439 0 -440 0 -41 -70 c-173 -290 -490 -535 -826 -639 -174 -53 -261 -65 -460 -65 -205 1 -306 17 -486 80 -378 131 -692 415 -884 799 -54 110 -135 316 -135 346 0 5 789 10 1918 11 l1917 3 13 95 c20 150 10 602 -17 755 -87 503 -292 914 -628 1266 -365 380 -835 620 -1383 704 -126 20 -488 28 -609 14z m384 -799 c215 -21 396 -73 574 -166 319 -165 566 -427 702 -744 40 -92 99 -299 99 -346 l0 -24 -1485 0 c-1283 0 -1485 2 -1485 14 0 8 7 48 15 88 36 174 112 351 216 509 85 128 281 322 414 411 215 144 463 234 707 257 121 12 123 12 243 1z" />
                <path d="M6805 2269 l-2270 -2271 200 5 c726 20 1487 247 2138 636 1095 657 1867 1747 2121 2997 53 261 90 608 84 797 l-3 107 -2270 -2271z" />
            </g>
        </svg>
    ),
    neon: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            fill="none"
            className="h-8 w-28 scale-[85%] overflow-visible md:mb-[-4px] md:mt-2 md:h-10 md:w-32 md:scale-100"
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
                clipRule="evenodd"
            />
            <path
                fill="url(#a)"
                fillRule="evenodd"
                d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
                clipRule="evenodd"
            />
            <path
                fill="url(#b)"
                fillRule="evenodd"
                d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M29.793 0A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36a.62.62 0 0 0 .62-.62v-19.2c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V1.241C31.035.556 30.479 0 29.793 0Z"
            />
            <path
                fill="currentColor"
                d="M60.686 10.6v9.416l-9.13-9.416h-4.752V26h4.334V15.88L61.082 26h3.938V10.6h-4.334ZM73.054 22.568V19.84h9.702v-3.278h-9.702v-2.53h11.77V10.6H68.632V26h16.434v-3.432H73.054ZM96.583 26.506c6.094 0 10.054-2.992 10.054-8.206 0-5.214-3.96-8.206-10.054-8.206S86.551 13.086 86.551 18.3c0 5.214 3.938 8.206 10.032 8.206Zm0-3.652c-3.388 0-5.478-1.65-5.478-4.554 0-2.904 2.112-4.554 5.478-4.554 3.388 0 5.478 1.65 5.478 4.554 0 2.904-2.09 4.554-5.478 4.554ZM123.249 10.6v9.416l-9.13-9.416h-4.752V26h4.334V15.88L123.645 26h3.938V10.6h-4.334Z"
            />
        </svg>
    ),
    drizzle: (props: IconProps) => (
        <svg
            {...props}
            width="100%"
            height="100%"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 h-10 w-auto scale-[210%] md:mt-0 md:scale-[190%]"
        >
            <rect
                width="9.63139"
                height="40.8516"
                rx="4.8157"
                transform="matrix(0.873028 0.48767 -0.497212 0.867629 43.4805 67.3037)"
                fill="currentColor"
            />
            <rect
                width="9.63139"
                height="40.8516"
                rx="4.8157"
                transform="matrix(0.873028 0.48767 -0.497212 0.867629 76.9395 46.5342)"
                fill="currentColor"
            />
            <rect
                width="9.63139"
                height="40.8516"
                rx="4.8157"
                transform="matrix(0.873028 0.48767 -0.497212 0.867629 128.424 46.5352)"
                fill="currentColor"
            />
            <rect
                width="9.63139"
                height="40.8516"
                rx="4.8157"
                transform="matrix(0.873028 0.48767 -0.497212 0.867629 94.957 67.3037)"
                fill="currentColor"
            />
        </svg>
    ),
    prisma: (props: IconProps) => (
        <svg
            {...props}
            viewBox="0 0 256 310"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className="mb-[-10px] h-7 w-auto scale-[170%] sm:mb-0 md:h-10 md:scale-[130%]"
        >
            <path
                d="M254.313 235.519 148 9.749A17.063 17.063 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.465 17.465 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.929 17.929 0 0 0 11.26-9.722 17.542 17.542 0 0 0-.101-14.76l-.008.008zm-23.802 9.683-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18h.007z"
                fill="currentColor"
            />
        </svg>
    ),
    resend: (props: IconProps) => (
        <svg
            {...props}
            width="100%"
            height="100%"
            viewBox="0 0 65 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-auto scale-[90%] md:h-10"
        >
            <path
                d="M0.820068 15V1.00001H7.02007C7.88674 1.00001 8.6734 1.20001 9.38007 1.60001C10.0867 1.98668 10.6401 2.51334 11.0401 3.18001C11.4534 3.84668 11.6601 4.60668 11.6601 5.46001C11.6601 6.30001 11.4534 7.06668 11.0401 7.76001C10.6401 8.44001 10.0867 8.98001 9.38007 9.38001C8.6734 9.78001 7.88674 9.98001 7.02007 9.98001H3.72007V15H0.820068ZM8.76007 15L5.20007 8.68001L8.28007 8.18001L12.2401 15.02L8.76007 15ZM3.72007 7.54001H6.88007C7.24007 7.54001 7.5534 7.46001 7.82007 7.30001C8.10007 7.12668 8.3134 6.89334 8.46007 6.60001C8.60673 6.29335 8.68007 5.95335 8.68007 5.58001C8.68007 5.18001 8.5934 4.83335 8.42007 4.54001C8.24674 4.24668 7.9934 4.02001 7.66007 3.86001C7.32674 3.68668 6.94007 3.60001 6.50007 3.60001H3.72007V7.54001Z"
                fill="currentColor"
            />
            <path
                d="M18.0534 15.2C16.9067 15.2 15.9 14.9667 15.0333 14.5C14.18 14.0333 13.5134 13.3933 13.0333 12.58C12.5667 11.7667 12.3333 10.8333 12.3333 9.78001C12.3333 8.95335 12.4667 8.20001 12.7333 7.52001C13 6.84001 13.3733 6.25335 13.8533 5.76001C14.3333 5.25335 14.9 4.86668 15.5534 4.60001C16.22 4.32001 16.94 4.18001 17.7134 4.18001C18.4334 4.18001 19.1 4.31335 19.7134 4.58001C20.3267 4.84668 20.8534 5.22001 21.2934 5.70001C21.7467 6.16668 22.0934 6.72668 22.3334 7.38001C22.5734 8.02001 22.68 8.71335 22.6534 9.46001L22.6334 10.34H14.1334L13.6733 8.60001H20.2934L19.9734 8.96001V8.52001C19.9467 8.16001 19.8267 7.84001 19.6133 7.56001C19.4134 7.26668 19.1534 7.04001 18.8334 6.88001C18.5134 6.70668 18.1533 6.62001 17.7533 6.62001C17.1667 6.62001 16.6667 6.73335 16.2533 6.96001C15.8533 7.18668 15.5467 7.52001 15.3333 7.96001C15.12 8.40001 15.0133 8.93335 15.0133 9.56001C15.0133 10.2 15.1467 10.7533 15.4134 11.22C15.6934 11.6867 16.08 12.0533 16.5734 12.32C17.08 12.5733 17.6733 12.7 18.3533 12.7C18.82 12.7 19.2467 12.6267 19.6334 12.48C20.02 12.3333 20.4333 12.08 20.8734 11.72L22.2334 13.62C21.8467 13.9667 21.42 14.26 20.9534 14.5C20.4867 14.7267 20.0067 14.9 19.5133 15.02C19.02 15.14 18.5334 15.2 18.0534 15.2Z"
                fill="currentColor"
            />
            <path
                d="M27.3121 15.2C26.3254 15.2 25.4454 15.04 24.6721 14.72C23.9121 14.3867 23.2988 13.9333 22.8321 13.36L24.6121 11.84C25.0121 12.28 25.4654 12.6 25.9721 12.8C26.4788 12.9867 26.9854 13.08 27.4921 13.08C27.6921 13.08 27.8721 13.06 28.0321 13.02C28.2054 12.9667 28.3521 12.9 28.4721 12.82C28.5921 12.7267 28.6788 12.62 28.7321 12.5C28.7988 12.3667 28.8321 12.2267 28.8321 12.08C28.8321 11.7867 28.7121 11.56 28.4721 11.4C28.3388 11.32 28.1321 11.2333 27.8521 11.14C27.5721 11.0333 27.2121 10.92 26.7721 10.8C26.0921 10.6267 25.5121 10.4267 25.0321 10.2C24.5654 9.96001 24.1921 9.69335 23.9121 9.40001C23.6721 9.12001 23.4854 8.82001 23.3521 8.50001C23.2321 8.16668 23.1721 7.80001 23.1721 7.40001C23.1721 6.92001 23.2788 6.48668 23.4921 6.10001C23.7054 5.70001 23.9988 5.36001 24.3721 5.08001C24.7588 4.80001 25.1988 4.58668 25.6921 4.44001C26.1854 4.28001 26.7054 4.20001 27.2521 4.20001C27.7988 4.20001 28.3321 4.26668 28.8521 4.40001C29.3721 4.53335 29.8521 4.72668 30.2921 4.98001C30.7454 5.22001 31.1388 5.50668 31.4721 5.84001L29.9521 7.52001C29.7121 7.29334 29.4388 7.08668 29.1321 6.90001C28.8388 6.71335 28.5321 6.56668 28.2121 6.46001C27.8921 6.35335 27.6054 6.30001 27.3521 6.30001C27.1254 6.30001 26.9188 6.32001 26.7321 6.36001C26.5588 6.40001 26.4121 6.46668 26.2921 6.56001C26.1721 6.64001 26.0788 6.74001 26.0121 6.86001C25.9588 6.98001 25.9321 7.11334 25.9321 7.26001C25.9321 7.40668 25.9654 7.54668 26.0321 7.68001C26.1121 7.81335 26.2188 7.92668 26.3521 8.02001C26.4988 8.10001 26.7121 8.19335 26.9921 8.30001C27.2854 8.40668 27.6788 8.52668 28.1721 8.66001C28.8121 8.83335 29.3521 9.02668 29.7921 9.24001C30.2454 9.45335 30.6054 9.70001 30.8721 9.98001C31.0988 10.22 31.2654 10.4933 31.3721 10.8C31.4788 11.1067 31.5321 11.4467 31.5321 11.82C31.5321 12.4733 31.3454 13.0533 30.9721 13.56C30.6121 14.0667 30.1121 14.4667 29.4721 14.76C28.8321 15.0533 28.1121 15.2 27.3121 15.2Z"
                fill="currentColor"
            />
            <path
                d="M37.5768 15.2C36.4301 15.2 35.4235 14.9667 34.5568 14.5C33.7035 14.0333 33.0368 13.3933 32.5568 12.58C32.0901 11.7667 31.8568 10.8333 31.8568 9.78001C31.8568 8.95335 31.9901 8.20001 32.2568 7.52001C32.5235 6.84001 32.8968 6.25335 33.3768 5.76001C33.8568 5.25335 34.4235 4.86668 35.0768 4.60001C35.7435 4.32001 36.4635 4.18001 37.2368 4.18001C37.9568 4.18001 38.6235 4.31335 39.2368 4.58001C39.8501 4.84668 40.3768 5.22001 40.8168 5.70001C41.2701 6.16668 41.6168 6.72668 41.8568 7.38001C42.0968 8.02001 42.2035 8.71335 42.1768 9.46001L42.1568 10.34H33.6568L33.1968 8.60001H39.8168L39.4968 8.96001V8.52001C39.4701 8.16001 39.3501 7.84001 39.1368 7.56001C38.9368 7.26668 38.6768 7.04001 38.3568 6.88001C38.0368 6.70668 37.6768 6.62001 37.2768 6.62001C36.6901 6.62001 36.1901 6.73335 35.7768 6.96001C35.3768 7.18668 35.0701 7.52001 34.8568 7.96001C34.6435 8.40001 34.5368 8.93335 34.5368 9.56001C34.5368 10.2 34.6701 10.7533 34.9368 11.22C35.2168 11.6867 35.6035 12.0533 36.0968 12.32C36.6035 12.5733 37.1968 12.7 37.8768 12.7C38.3435 12.7 38.7701 12.6267 39.1568 12.48C39.5435 12.3333 39.9568 12.08 40.3968 11.72L41.7568 13.62C41.3701 13.9667 40.9435 14.26 40.4768 14.5C40.0101 14.7267 39.5301 14.9 39.0368 15.02C38.5435 15.14 38.0568 15.2 37.5768 15.2Z"
                fill="currentColor"
            />
            <path
                d="M43.2755 15V4.42001H45.9955L46.0755 6.58001L45.5155 6.82001C45.6622 6.34001 45.9222 5.90668 46.2955 5.52001C46.6822 5.12001 47.1422 4.80001 47.6755 4.56001C48.2089 4.32001 48.7689 4.20001 49.3555 4.20001C50.1555 4.20001 50.8222 4.36001 51.3555 4.68001C51.9022 5.00001 52.3089 5.48668 52.5755 6.14001C52.8555 6.78001 52.9955 7.57335 52.9955 8.52001V15H50.1555V8.74001C50.1555 8.26001 50.0889 7.86001 49.9555 7.54001C49.8222 7.22001 49.6155 6.98668 49.3355 6.84001C49.0689 6.69334 48.7355 6.62668 48.3355 6.64001C48.0155 6.64001 47.7155 6.69335 47.4355 6.80001C47.1689 6.89334 46.9355 7.03335 46.7355 7.22001C46.5489 7.40668 46.3955 7.62001 46.2755 7.86001C46.1689 8.10001 46.1155 8.36001 46.1155 8.64001V15H44.7155C44.4089 15 44.1355 15 43.8955 15C43.6555 15 43.4489 15 43.2755 15Z"
                fill="currentColor"
            />
            <path
                d="M58.8569 15.2C57.9236 15.2 57.0903 14.9667 56.3569 14.5C55.6369 14.02 55.0636 13.3733 54.6369 12.56C54.2236 11.7333 54.0169 10.78 54.0169 9.70001C54.0169 8.64668 54.2236 7.70668 54.6369 6.88001C55.0636 6.04001 55.6369 5.38668 56.3569 4.92001C57.0903 4.44001 57.9236 4.20001 58.8569 4.20001C59.3503 4.20001 59.8236 4.28001 60.2769 4.44001C60.7436 4.58668 61.1569 4.79335 61.5169 5.06001C61.8903 5.32668 62.1903 5.62668 62.4169 5.96001C62.6436 6.28001 62.7703 6.61335 62.7969 6.96001L62.0769 7.10001V0.200012H64.9369V15H62.2369L62.1169 12.56L62.6769 12.62C62.6503 12.9533 62.5303 13.2733 62.3169 13.58C62.1036 13.8867 61.8169 14.1667 61.4569 14.42C61.1103 14.66 60.7103 14.8533 60.2569 15C59.8169 15.1333 59.3503 15.2 58.8569 15.2ZM59.4969 12.84C60.0303 12.84 60.4969 12.7067 60.8969 12.44C61.2969 12.1733 61.6103 11.8067 61.8369 11.34C62.0636 10.8733 62.1769 10.3267 62.1769 9.70001C62.1769 9.08668 62.0636 8.54668 61.8369 8.08001C61.6103 7.61335 61.2969 7.24668 60.8969 6.98001C60.4969 6.71335 60.0303 6.58001 59.4969 6.58001C58.9636 6.58001 58.4969 6.71335 58.0969 6.98001C57.7103 7.24668 57.4036 7.61335 57.1769 8.08001C56.9636 8.54668 56.8569 9.08668 56.8569 9.70001C56.8569 10.3267 56.9636 10.8733 57.1769 11.34C57.4036 11.8067 57.7103 12.1733 58.0969 12.44C58.4969 12.7067 58.9636 12.84 59.4969 12.84Z"
                fill="currentColor"
            />
        </svg>
    ),
    shadCn: (props: IconProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
        </svg>
    ),
    tailwind: (props: IconProps) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 54 33"
        >
            <g clipPath="url(#prefix__clip0)">
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    ),
}
