# ecss-project

Angular frontend skeleton for eCSS project.

## Setup
1. "Cài nodejs 20 và npm 10"
2. npm install
3. ng serve

## Structure
- src/app/core: ApiService, interceptors
- src/app/repos: plain TS repositories (not registered to DI)
- src/app/services: Injectable services (use repos internally)
- src/app/modules: cart / orders modules (lazy loaded)

## Làm việc với GIT
1. git clone https://github.com/dung2004/ecss-project.git
2. cd ecss-project
3. git checkout main
4. git pull origin main (kéo hết file từ main về máy)

(Quy tắc đặt tên nhánh: master/develop/feature/<tên feature>)
5. git checkout -b master/develop/feature/<tên feature> (tạo nhánh mới, để sau sẽ push hoặc commit với main sau)
6. git add .
6.1. git commit -m "Mô tả thay đổi"
6.2. git push -u origin master/develop/feature/<tên feature>


Chú ý: main là nhánh bảo vệ, không ai được push trực tiếp. Để có lỗi thì sửa ở nhánh mà mọi người tạo ở bước 5.
