"use client";


const Map = () => {
    return (
        <div>
            <iframe
        width="600px"
        height="400px"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.751337774984!2d46.73213891497602!3d24.66933327913115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03c42181b295%3A0x2cda0de6f896a714!2s24%C2%B040'09.6%22N%2046%C2%B043'55.7%22E!5e0!3m2!1sen!2s!4v1620287425933!5m2!1sen!2s"
        allowFullScreen={true}
        loading="lazy"
        style={{border: '2px solid #581412', borderRadius: 5}}
      ></iframe>
        </div>
    );
};

export default Map;