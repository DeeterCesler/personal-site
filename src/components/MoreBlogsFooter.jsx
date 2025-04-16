const MoreBlogsFooter = ({shortRef}) => {
    const blogs = [
        {
            shortRef: "security",
            title: "8 Security Principles EVERY Software Dev Should Know",
            href: "/blog/security"
        },
        {
            shortRef: "junior",
            title: "6 Ways to De-Junior Your Code",
            href: "/blog/junior"
        },
        {
            shortRef: "startups-vs-big-tech",
            title: "Working at Big Tech vs. Startups",
            href: "/blog/startups-vs-big-tech"
        },
        {
            shortRef: "senior",
            title: "3 Ways a Senior Thinks",
            href: "/blog/senior"
        },
        {
            shortRef: "immutability",
            title: "Immutability in JavaScript",
            href: "/blog/immutability"
        },
        {
            shortRef: "bdd",
            title: "What is BDD? Intro to Behavior-Driven Development",
            href: "/blog/bdd"
        },
        {
            shortRef: "testing",
            title: "Use TDD for Faster Development",
            href: "/blog/tdd"
        },
        {
            shortRef: "looping",
            title: "Everything You Need to Know About Looping in JavaScript",
            href: "/blog/looping"
        },
        {
            shortRef: "layout-management",
            title: "Managing Frontend Layouts: Bootstrap vs Flexbox vs CSS Grid",
            href: "/blog/bootstrap-flexbox-css-grid"
        }
    ]

    const randomBlogs = blogs.sort(() => Math.random() - 0.5);
    const filteredBlogs = randomBlogs.filter((blog) => blog.shortRef !== shortRef);
    const limitedBlogs = filteredBlogs.slice(0, 3);

    return (
        <ul className="other">
            {limitedBlogs.map((blog) => (
                <li key={blog.href}>
                    <a href={blog.href}>{blog.title}</a>
                </li>
            ))}
        </ul>
    )
}

export default MoreBlogsFooter;
