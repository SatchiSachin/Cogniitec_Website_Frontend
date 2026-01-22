import BlogHeroImg from "../../assets/Images/blog/blogHeroimg.svg";



const BlogHero = () => {
    return (
        <div className="w-full bg-[#FCF7EF] py-16 px-4 flex flex-col items-center">
            {/* Title */}
            <h1 className="text-2xl md:text-[42px] font-semibold text-black mb-4">
                Blog
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-center max-w-xl mb-12 text-[15px]">
                Get the latest updates and deeper coffee experience from IMAJI Coffee
            </p>

            {/* Blog Image */}
            <div className="w-full max-w-5xl overflow-hidden rounded-lg">
                <img
                    src={BlogHeroImg}
                    alt="Blog Cover"
                    className="w-full h-auto object-cover"
                />
                 <div className="">

                {/* Blog Title */}
                <h1 className="mt-6 text-2xl md:text-2xl font-medium text-black text-start md:text-left max-w-5xl">
                    Collaboration to Develop Coffee and Beverage Industry Expertise in
                    Indonesia
                </h1>

                {/* Blog Meta */}
                <p className="text-gray-500 text-sm mt-2 max-w-5xl">
                    4 Min • August 19, 2022
                </p>
            </div>
            </div>
           

        </div>
    );
};

export default BlogHero;
