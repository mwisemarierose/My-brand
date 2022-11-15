async function deleteBlog(id) {
    alert('Deleting project...');
    try {
        await axios
            .delete(`${global}/api/post/deletePost${id}`);
        location.reload()
    } catch (error) {
      
        res.status(400).json({ message: error.message })
    }
}
