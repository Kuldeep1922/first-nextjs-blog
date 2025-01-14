export default async function handler(req, res) {
  const jsonServerUrl = "http://localhost:2000/messages";

  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    try {
      const response = await fetch(jsonServerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
          createdAt: new Date(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to save data: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Message saved:", result);

      res.status(200).json({
        result,
        message: "Data saved successfully",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Failed to save data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
