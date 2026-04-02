export const authClient = async (req, res) => {
  try {
    const user = req.user; // lay tu authMiddleware
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.error("Loi khi goi authClient", error);
    return res.status(500).json({ message: "loi he thong" });
  }
};
