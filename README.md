## Ứng dụng trò chuyện (chat app) 
Được xây dựng bằng Node.js là một ứng dụng trực tuyến cho phép người dùng gửi và nhận tin nhắn trong thời gian thực. Node.js là một nền tảng phát triển ứng dụng phía máy chủ dựa trên JavaScript, cho phép xây dựng các ứng dụng mạnh mẽ và có khả năng mở rộng cao.
Khi xây dựng một chat app bằng Node.js, có thể sử dụng các framework và thư viện như Express.js để xây dựng cơ sở hạ tầng máy chủ và quản lý tạo kết nối với người dùng. Dưới đây là một số thành phần quan trọng mà một chat app Node.js có thể bao gồm:
1. Socket.IO: Đây là một thư viện hỗ trợ giao tiếp thời gian thực hai chiều giữa máy chủ và trình duyệt. Nó sử dụng giao thức WebSocket để duy trì kết nối liên tục và truyền dữ liệu tin nhắn giữa các phía.
2. Express.js: Framework này cung cấp các tính năng mạnh mẽ cho việc xây dựng các ứng dụng web Node.js. Nó giúp quản lý tạo kết nối, xử lý các yêu cầu và phản hồi từ người dùng.
3. Cơ sở dữ liệu: Một chat app thường sử dụng cơ sở dữ liệu để lưu trữ thông tin người dùng, tin nhắn và lịch sử trò chuyện. Node.js hỗ trợ nhiều loại cơ sở dữ liệu như MongoDB, MySQL hoặc PostgreSQL.
4. Xác thực và quản lý phiên: Để bảo mật ứng dụng chat, thông thường cần có quy trình xác thực và quản lý phiên người dùng. Điều này đảm bảo rằng chỉ người dùng được xác thực mới có thể truy cập vào ứng dụng và trò chuyện với nhau.
5. Giao diện người dùng: Chat app có thể có giao diện người dùng để người dùng nhập tin nhắn và xem tin nhắn đã nhận. Giao diện người dùng có thể được xây dựng bằng HTML, CSS và JavaScript, và kết hợp với mã Node.js để gửi và nhận dữ liệu trên giao diện.
 **Lưu ý: ** đây là một ứng dụng demo cho chat app và không có sử dụng cơ sở dữ liệu.

 ## Yêu cầu
 Chat app yêu cầu máy tính của bạn phải có cài đặt node js .
 Bạn có thể truy cập trang web sau để tải node js (https://nodejs.org/en) **hoặc** (https://openplanning.net/11921/cai-dat-nodejs-tren-windows) để được hướng dẫn cài đặt.

 # Cài đặt
 1. Đầu tiên các bạn cần clone từ github về máy bằng lệnh sau:
   ```bash
     git clone https://github.com/nguyentrien17/chatapp
   ```
2. Sau đó truy cập vào thư mục chứa dự án:
    ```bash
     cd chatapp
    ```
3. Cài đặt các gói (packages) Express và Socket.IO trong môi trường Node.js.
    ```bash
     npm install express socket.io
    ```
4. cài đặt hai gói npm là Multer và emoji-mart trong môi trường Node.js.

   **Multer**: là một middleware Node.js cho phép xử lý các yêu cầu HTTP và multipart/form-data, chủ yếu được sử dụng để xử lý tải lên (upload) các tệp tin từ máy khách lên máy chủ.
 
   **emoji-mart**: là một thư viện JavaScript cung cấp các thành phần (components) giao diện người dùng để hiển thị và chọn biểu tượng cảm xúc (emoji). Nó cung cấp các khung nhìn (views) và tính năng tùy chỉnh để tạo trải nghiệm emoji linh hoạt trên ứng dụng web của bạn.
   
     ```bash
      npm install multer emoji-mart
     ```
    
5. Tạo một file **package.json** mới cho dự án của bạn. File package.json chứa thông tin về dự án, các dependencies (phụ thuộc) cần thiết và các cấu hình khác liên quan đến dự án.
   
    ```bash
     npm init
    ```
    
    Sau khi chạy lệnh trên, npm sẽ hỏi bạn về các thông tin dự án và bạn có thể nhập giá trị cho các thuộc tính tương ứng. Bạn có thể bỏ qua một số trường nếu muốn và để mặc định bằng cách nhấn ** Enter **. Khi bạn hoàn thành việc cung cấp thông tin, npm sẽ tạo một file package.json mới trong thư mục dự án của bạn, dựa trên các thông tin mà bạn đã cung cấp.
   
7. cài đặt hai gói phụ thuộc là Express và ws.
   
    **Express**: là một framework phát triển ứng dụng web phía máy chủ (server-side) bằng ngôn ngữ JavaScript. Nó cung cấp các tính năng và công cụ để xây dựng các ứng dụng web một cách dễ dàng và mạnh mẽ.
   
    **ws**: là một thư viện WebSocket cho Node.js. Nó cung cấp một giao diện đơn giản để tạo và quản lý kết nối WebSocket giữa máy chủ và trình duyệt hoặc ứng dụng client-server khác.
   
    ```bash
      npm install express ws
    ```
 ## Trên Windowns
 Để chạy trực tiếp ứng dụng trên "http://localhost:3000/" sử dụng lệnh:
   ```bash
    node server.js
   ```
Sau khi chạy lệnh trên hãy truy cập vào (http://localhost:3000/) để xem kết quả.

## Docker
 **Yêu cầu**: Đảm bảo máy tính của bạn đã cài đặt docker destop về máy **hoặc** truy cập vào trang web (https://www.docker.com/) để cài đặt.
 
 ### Cách 1:
 Sử dụng **docker build** và **docker run** để chạy trên docker:
   ```bash
     docker build -t chat-app .
   ```

    ```bash
      docker run -p 3000:3000 chat-app
    ```
  Sau khi chạy lệnh trên hãy truy cập vào (http://localhost:3000/) để xem kết quả.

  ### Cách 2:
  Sử dụng **docker-compose**
  ```bash
    docker-compose up
  ```
  Sau khi chạy lệnh trên hãy truy cập vào (http://localhost:3000/) để xem kết quả.
  
  **Tuy nhiên** bạn cũng có thể thay đổi cổng bằng cách sửa lại **EXPOSE** trong dockerfile và **ports:** trong docker-compose.yml thành các cổng mong muốn.
 
