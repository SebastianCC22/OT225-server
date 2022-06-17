export const createActivities = async (req, res) => {
    const {  name, content } = req.body;
    try {
        if(name && content) {
            const activity = await Activities.create({
                name,
                content
            });
            res.status(201).json(activity);
        } else {
            res.status(400).json({
                success: false,
                message: 'Please provide a name and content'
            });
        }
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}