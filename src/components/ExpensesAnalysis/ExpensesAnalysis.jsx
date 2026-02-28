import Header from "../Header/Header";

function ExpensesAnalysis() {
    return (
        <>
            <Swrapper>
                <Header />

                <Outlet />
            </Swrapper>

            <script src="js/script.js"></script>
        </>
    );
}

export default ExpensesAnalysis;
