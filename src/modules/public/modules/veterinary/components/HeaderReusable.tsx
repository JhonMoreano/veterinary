
interface DataHeader {
    title: string
    sub_title?: string
    children?: React.ReactNode
}


const HeaderReusable = ({ children, title, sub_title }: DataHeader) => {


    return (
        <div className=" flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">

                {children}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        {title}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {sub_title}
                    </p>
                </div>
            </div>


        </div>
    );
};

export default HeaderReusable;