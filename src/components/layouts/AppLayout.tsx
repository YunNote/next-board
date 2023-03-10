import MenuBar from "./MenuBar";

export default function AppLayout( props: {children : React.ReactNode}) {


    return (
        <>
        <MenuBar />
        <div>{props.children}</div>
        </>
    )
}