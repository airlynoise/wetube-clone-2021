const videos = [
    {
        title: "First Vidoe",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Vidoe",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third Vidoe",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },
];

export const trending = (req, res) => { 
    
    res.render("home", {pageTitle: "Home", videos}); 
};
export const watch = (req, res) => { 
    const { id } = req.params;
    //또는 const id = req.params.id;
    // console.log("Show video", id);
    const video = videos[id - 1];
    return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => { 
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("edit", { pageTitle: `Editing: ${video.title}`, video }); 
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id -1].title = title;
    return res.redirect(`/videos/${id}`);
}