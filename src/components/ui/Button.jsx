const Button = ({
    children,
    variant="primary"
}) => {

    const styles = {

        primary:
        "bg-primaryBronze text-MidnightVoilet hover:bg-primaryBronze/10 hover:text-primaryBronze",

        secondary:
        "border border-primaryBronze text-white hover:border-primaryBronze/85"

    };

    return(

        <button

            className={`
            inline-flex
            items-center
            justify-center
            font-medium
            rounded-xl
            px-7
            py-3
            cursor-pointer
            transition-all
            duration-300
            ${styles[variant]}
            `}
        >

            {children}

        </button>

    )

}

export default Button;