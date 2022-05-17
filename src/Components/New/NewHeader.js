import { Link } from 'react-router-dom';
import './NewHeader.css';

function NewHeader() {
  return (
    <div className='topNavigation row m-0' style={{ height: "61px", paddingTop: "17px", position: "fixed", background: "white", zIndex: "1" }}>
      <div className="col-2" style={{textAlign:"left"}}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA/hJREFUWAnVmEFLG0EYht1EEz2IBKkWpV76BwoFUyJKaQK2tfXQUy+Feii99hdU/AeFnkoP9thTD4q1QiJFMTSWQv9ALzlIsUgQDxo1pu+72RkmMXG/WTcYBzazO/u97/fsZDIzG6darUa7rlGJXCNWF7XbFnh6enqkVCo9PTs7y0A7hmMExyCOPRw7OIqRSCSbSCSW19bWeB1qcaRDIpVK3T85OVlAfAoEjoCi6jhOvqenZz6fz38XxItCfIEzmczt/f39dwB9JHJsEgTw1YGBgTfZbPZPk9tWTRcCT0xMpMvl8mc4JgzXMgDW8bUv9fX1/YpGoztTU1N7Gxsbg5VKZeTw8PAuhsssHjANTczQleLx+POtra2c0WZ92hI4mUy+ROIPasgA8hTHYn9//0Iul/vrlymdTt88ODiYh34Oh/tbgb6CB31dKBQ++elb3W8KzJ49Pj7+qmAhLqI3n21ubv5uZdSqfXJy8g56/Qvu8wfaRehYLPY4aE+fm9Y4ZjkMFCwS/BweHk4GgSUgddTTh9f0pT/z8Nq2nAPmDwwmaswWh4aGZldWVv7ZGpvx1NMHbUWvPeHlMcNE53VDglMXhkKWSvTIaW9v772gPdssO4fH0dHRDzWmMTQytlNeXQ9znlWJALwYJix96UdflcPMp9r8ag3MFQxPzkWBpczZoHYa7qfnW6Yr8zGvTQYNzOUWQncFQy+sS6Yum0Qqlr70964dL6+67VtrYG9v4Aq4KPgqLxFg+pt5JZYaGMHuPEkRVzCJOGhMg7/OK/EzgfVY4nIrEQeNafDXeSV+JjC3iG7h3kCdt6Nu8Nd5JblMYA3JjYxEHDSmwV/nlfiZwHoYcNclEQeNafDXeSV+JnBRCbhFVOftqBv8dV5JLg2MqcZdkiniflYiDhpj+pt5JX4amO9gEFQpwgr0gPtZiYFtDH3hz809S9XLW7sSfGpgvjBiBcp7mjg33wK9dYjnG6OQ+WxfVDUwDfjCyJoFvTDH3VXtKpxP+tFXuZn5VJtfXQfMrR6eepUiGHfzTWFmZuaGn4nkPn3oR1/GM4/t1pK6OmA28O0WVYnnKGO7u7tLl4Wmnj70c13h7+XxLuVV3QZeydr5TsccmBm+bW9vP1H5bOqmwDRox1uzCQboRUC/Mtsk5y2BKQ77fwlAFjAHP1RgQaAvBKZx2P/8jI+PfwS0nilsoX2BVW+E+d/aZaDFwAo8rH8vg0JbAyvwMOog0Ofm4TBApB6cJTiGVTzHNh9CXTerrxSYQLbQVw5sC90RwDbQHQMshe4o4AugX/AeS8cBE6rxh4imW2xn6UhggnnQc5j23o6Ojr5nG8uVLhw1BLvPju3hVo/xH05eTbk4cAxAAAAAAElFTkSuQmCC" alt="#" style={{ height: "30.5px", width: "30.5px" }} />
      </div>
      <div className="col-8 text-center">
        <p style={{ fontSize: "21px" }}><b>New Arrivals</b></p>
      </div>
      <div className="col-2" style={{ textAlign: "right" }}>
        <Link to="/wishlist">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABSpJREFUWAnVmH9MW1UUxynlNyWDYekMxMLiUvaHPxKghcbyYwRQ9A/NFrYYEhQi/2l0M/iXIcskmcTpgj8XTYyRmI0l+wtZiECAgQKpcZos4h8aXRNU/BGUtrBCW7/nrqfpe32M1/r0lZuUc+69557zeefde957GMLhsDFtD7X0PcQqUPcccEYiGW5vb9/v9XrvDoVC+4xG4+8Wi2VlZGTEm4iPtra24o2NjQPkIzMz87fS0tKV4eFhn1ofht32cFNT030+n+8pBHgUTu+VOQ6j/1V6evqnRUVF74+Pj6/I5kXX5XI9GAgEyEc74h2U2YQNBoObfJhMpg8mJyd/kc1LujsCNzc3l62vr59FkONYYZCsUugg6CaG37HZbKc5Yy0tLda1tbVXAXlUjQ/Y+HHn3rJarWdw5zYUwqQpAtfX1z/k9/svY4FZtsgLsB8x9hd+dwGkAjILv2jD/A1k6vHt7e3yzc3NS7DZH52Egvl1iJ/wIx9mzJdDSnyg/3VxcfETuGM3oUtaHLDT6XwEt+8KrDIjlnTLrmC/vVtdXT03NDS0zR56enrylpeXW2F/EoGdPA65hjUmjPEZCeOWX87KynoPWZ/v7+8Psm1HR4fJ4/G04QJPwd7O45CrhYWFromJie9jxqQZRmZtyOznMNgXMVrJyck5MTc3R2N3bLW1tU8Gg8ELCJobawhwD0CPz8/PL8WOK+nw0QUfb8NHDs1j7Xc42HWjo6N/s72krAH2Y0wIWBj/UFJS4lADS84WFhY+yc/Pb8C6P9g59Ou4tQ41sBEfH2VnZ7dCD1Af4LbV1dVXSOcW3RJ1dXXHtra2LkYmfHl5ec7Z2dkbbKhWNjQ03I8L/wz2HrPZ3Do2Nvan2rVsZ7fbn8dhf436uOhgQUHBA1NTU8vUj2YYe+hFGqCGk3o+GVhaOzMz801ubu6RZGHJx9LS0nmATpKOLBtR+58hnZo4FChhBzBRdXso7RaCnYvoSYlkLzY2GA75BRzmZhoD2wmIU6SLDOPBcAQ619qZ2E1ORnq0srKyq4jrp9gAtlBNJ10AY+Ae6lBD+fnytqbvX3pwYFu4mQLn4jDpAhgb3MITkL/G6HqrtxgAjCbSBTCuJPryAV1MsKGeEnc+xPHBJXQBjMGfeQJG5azrLQF5iBlQuW6SLoBxIq/zBFLfwrqeEm+Jh5G8gxGGLbwQfUu6AO7q6voCV8MF3orXwSY9YSk2Kld1DMM1fgMUwL29vSEAX2IDvGUNTE9Pc5nj4f9VDg4ODqNifUhBMzIyhCRdAJOCx98AoMU7KG6Fva+v7yyN69UaGxvDgO7F3j3d3d0dTWb0XYLAHA7HS3hbGmBIGJ9cXFwc4n4qSAkwAdXU1FxEho8xXKpBR7cEA1ZUVDwN/Rr3kfHXkfnnuK+3jAOmR2JlZeVjqQodB0wZpBKSqtCKwKkMvSNwqkLHVQkClbfOzs58fB2PYtzFc8lUD3z6nMGjn17E5Z/17JZlAA+Nc/jyeJkHWN4xw2yk1Z4G7LPwuRsshc2K2DJCVKoCJuudoPFpThCqGrL2JgzFF/EuCyjDZBvXVG2J2FVK2wPP+hfwma8YIHatFrrqDHMwpUzji/uNRDLNvpKRCQNTED2hkwLWEzppYL2gEz50BCpvSgfR7XaLf9IkUHvlbrkvqcn/KsPsUWlP81wCtZeXyKWkJmsCTBF2gk6g9spBuS+pyZpsCfZMkrcHtsR/8iGrWYYZmjJdVVX1MPe1lppnWGtAuT/NMywPoHX/HxrJY/DjbwP8AAAAAElFTkSuQmCC" alt="#" style={{ width: "30px", height: "30px" }} />
        </Link>
      </div>
    </div>
  );
}

export default NewHeader;




