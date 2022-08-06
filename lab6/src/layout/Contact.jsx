export default function Contact() {
  return (
    <div>
      <h1 className="pt-2 pb-2 text-center">Liên hệ</h1>
      <form id="contact" className="p-2 col-12 m-auto text-white">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="hoten"
            placeholder="Họ tên"
          />
          <label htmlFor="hoten">Họ tên</label>
        </div>
        <div className="mb-3 form-floating">
          <select id="tinh" className="form-control" placeholder="Chọn tỉnh">
            <option value="0">Chọn tỉnh</option>
            <option value="1">Hà Nội</option>
            <option value="2">Hồ Chí Minh</option>
            <option value="3">Đà Nẵng</option>
          </select>
          <label htmlFor="tinh">Tỉnh</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Nội dung..."
            id="noidung"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="noidung">Nội dung</label>
        </div>
        <div className="mb-3 text-left">
          <button className="btn btn-primary">Gửi liên hệ</button>
        </div>
      </form>
    </div>
  );
}
