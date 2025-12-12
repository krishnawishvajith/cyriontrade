from fastapi import FastAPI, Request
import uvicorn

app = FastAPI()

@app.post("/data")
async def get_data(req: Request):
    data = await req.json()
    print("Received:", data)   # show in console
    return {"status": "ok"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
