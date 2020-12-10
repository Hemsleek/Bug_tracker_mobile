import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function AddIcon(props) {
    return (
        <Svg
            width={37}
            height={37}
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.5 12.667V18.5v-5.833zm0 5.833v5.833V18.5zm0 0h5.833H18.5zm0 0h-5.833H18.5zm17.5 0a17.5 17.5 0 11-34.999 0A17.5 17.5 0 0136 18.5z"
                fill="#000"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export function BugIcon(props) {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9.167 14.918a4.168 4.168 0 003.333-4.083v-2.5a4.15 4.15 0 00-.346-1.667H4.513a4.15 4.15 0 00-.346 1.667v2.5A4.169 4.169 0 007.5 14.918v-4.916h1.667v4.916zm-6.22-1.841a5.816 5.816 0 01-.447-2.242H0V9.168h2.5v-.833c0-.536.072-1.054.208-1.547L.863 5.723l.834-1.443 1.683.972a5.85 5.85 0 01.166-.25h9.575c.057.081.112.166.166.25l1.683-.972.833 1.443-1.844 1.065c.135.492.208 1.011.208 1.547v.833h2.5v1.667h-2.5c0 .794-.159 1.552-.447 2.242l2.083 1.203-.833 1.443-2.105-1.215a5.82 5.82 0 01-4.532 2.16 5.82 5.82 0 01-4.531-2.16l-2.105 1.215-.834-1.443 2.084-1.203zM5 3.335a3.333 3.333 0 016.667 0H5z"
                fill="#95A4A6"
            />
        </Svg>
    )
}

export function DeleteIcon(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1.667 4.704h14.817m-.926 0l-.803 11.245a1.853 1.853 0 01-1.847 1.721H5.243a1.852 1.852 0 01-1.847-1.72L2.593 4.703h12.965zM7.223 8.41v5.557-5.557zm3.705 0v5.557-5.557zm.926-3.705V1.926A.926.926 0 0010.928 1H7.223a.926.926 0 00-.926.926v2.778h5.557z"
                stroke="#B5B5B9"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export function CheckedIcon(props) {
    return (
        <Svg
            width={20}
            height={16}
            viewBox="0 0 13 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.925.442a.834.834 0 010 1.178L5.257 8.288a.833.833 0 01-1.178 0L.745 4.954a.833.833 0 011.178-1.178L4.668 6.52 10.747.442a.834.834 0 011.178 0z"
                fill="#95A4A6"
            />
        </Svg>
    )
}
