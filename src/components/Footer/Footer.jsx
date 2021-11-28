import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-frame">
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>DONGOLOK.KG</h4>
            <h4 className="list-unstyled">
              <li>+996500299222</li>
              <li>Бишкек, Кыргызстан</li>
              <li>улица Тоголок Молдо</li>
            </h4>
          </div>
          <div className="col">
            <h4>Время работы</h4>
            <ui className="list-unstyled">
              <li>ПН-ПТ 9:00-17:00</li>
              <li>СБ-ВС 10:00-18:00</li>
              <li>В праздничные дни круглосуточно</li>
            </ui>
          </div>
          <div className="col">
            <h4>Онлайн магазин шин</h4>
            <ui className="list-unstyled">
              <li>Резина</li>
              <li>Диски</li>
              <li>Аксессуары</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="descr">
            <p>Мы  официальный представитель ведущих мировых марок шин. Это команда профессионалов, работающих не один год на рынке и сумевшая заслужить безупречную репутацию. </p>
        </div>
        <hr/>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Makers students | Все права защищены |
            Копирование материалов без согласия авторов запрещено | 
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;