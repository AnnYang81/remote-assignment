const postData = {
    title: 'This is a sample post',
    q1: `Node.js 可以為全端開發提供一致的語言環境，實現了跨堆疊的共享 / 具有龐大的package生態系統，
          開發者可透過npm下載並使用、加速開發 / 可在AWS上運行Node.js應用`,
    q2: `CSS-in-JS提供了一種將樣式寫在組件中的解決方式，以解決一般CSS可能出現的問題，如:因CSS-in-JS為局部作用域，
          可解決命名衝突，此外CSS-in-JS可根據組件的狀態或屬性生成動態樣式，在維護上也更容易。`,
    q3: `我用useState 創建两个狀態變量 liked 和 likeCount，分別追蹤是否為點讚的狀態以及讚數的變化。
          用useEffect更新title，使其顯示讚數，當likeCount發生變化時，useEffect就會被調用。`,
    q4: `SSR是在伺服器上產生完整HTML，瀏覽器直接接收已渲染好的網頁，CSR則是瀏覽器下載基本HTML骨架，
          然後使用JavaScript在瀏覽器中動態生成網頁內容。在Next.js中，若使用SSR，HTML會在每次請求時動態產生，
          以確保每個請求都有相應的HTML內容。因此為了實現SSR，可以使用getServerSideProps函數，該函數會在每次請求時由伺服器調用，
          讓每個請求獲取的數據能注入到React組件中，並返回相應的HTML。`,
    q5: `在編寫js時，我的編碼風格如以下:`,
    q5_1:`若遇到較複雜或涵蓋我自己當時想法的代碼，我會用註解解釋`,
    q5_2:`運算符周圍會添加空格，增加可讀性`,
    q5_3:`使用具有描述性的變數名稱`,
    q5_4:`如getPostData.js中，我會控制每行的長度`,
    q5_5:`避免使用函數聲明，(因其可以在聲明之前被調用、不會引發錯誤，容易在複雜的程式碼中出現錯誤)`
};

export default postData;