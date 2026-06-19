// --- CONTENT DATABASE ---
const modules = [
    // MOD 0: Foundations
    {
        title: "Foundations",
        cards: [
            // Set 1: Inflation & Value (1-4)
            { type: 'content', title: "The Silent Thief", text: "In 2010, a movie ticket in a metro city cost ₹150. Today, the same seat costs ₹400-500. This isn't just corporate greed; it's <b>Inflation</b>. It silently eats the value of your money while you sleep.<br>", icon: "💸" },
            { type: 'content', title: "Real Data: 6% Erosion", text: "India's average inflation is ~6% per year. Meaning, ₹1 Lakh today will only buy ₹94,000 worth of goods next year. In 10 years, its value halves. Holding cash is actually <i>losing</i> wealth.<br><br>Think about your parents' era when ₹100 was a massive amount for groceries. Today, it barely buys a few snacks. This 6% annual decay means that if you plan to retire in 20 years, your current expenses will triple. You don't just need to save; you need to outpace this constant erosion with your investment choices.", icon: "📉" },
            { type: 'content', title: "The Burger Index", text: "In 2000, a standard burger cost ₹20. In 2024, it costs ₹80+. The burger didn't get 4x better; your money just got 4x weaker. This is why keeping money in a locker destroys it.<br><br>Imagine you hid ₹2000 under your mattress in the year 2000. It could have bought 100 burgers. Today, that same ₹2000 only buys 25 burgers. You've lost 75% of your 'burger wealth' without ever spending a rupee. Real wealth is measured by what you can buy, not just the number in your bank account.", icon: "🍔" },
            { type: 'quiz', question: "If you hide ₹1 Lakh under your mattress for 10 years, what happens?", options: ["Value stays same", "Value increases", "Value decreases due to inflation", "It doubles"], correct: 2, explanation: "Inflation reduces purchasing power. ₹1 Lakh will buy much less in the future." },

            // Set 2: Savings vs Investing (5-8)
            { type: 'content', title: "The Savings Trap", text: "Most Savings Accounts offer 3% interest. If inflation is 6%, your <b>Real Return</b> is 3% - 6% = <b>-3%</b>. You are becoming 3% poorer every year by 'saving' in a bank.<br><br>Many Indians feel safe keeping all their money in a savings account because the balance never goes down. This is an emotional trap called 'Money Illusion.' While the number stays the same, the power of those rupees to buy a house, a car, or tuition is shrinking every day. Saving is for short-term safety; investing is for long-term survival.", icon: "🏦" },
            { type: 'content', title: "Concept: Real Return", text: "The only return that matters is 'Inflation Adjusted Return'.<br>FD Return: 7%<br>Inflation: 6%<br><b>Real Growth: 1%</b>. You barely beat the thief.<br><br>If an investment offers you 8% but the cost of your goals (like education or health) is rising at 10%, you are still losing ground. To build wealth, you must target asset classes that consistently provide a positive 'Real Return' after accounting for both inflation and taxes.", icon: "🧮" },
            { type: 'content', title: "Needs vs Wants", text: "<b>Needs:</b> Food, Rent, Basic Clothes (Survival).<br><b>Wants:</b> iPhone 15, Branded Shoes, Cafe Coffee (Desire).<br>Wealth is built by controlling Wants, not just by earning more.<br><br>Every time you spend ₹300 on a luxury coffee, you aren't just losing ₹300. You are losing the ₹5,000 that ₹300 could have become in 25 years if invested. This is the 'Opportunity Cost.' You don't have to live a boring life, but you must realize that small, recurring luxury spends are the biggest enemies of your future Crore.", icon: "⚖️" },
            { type: 'quiz', question: "If your bank gives 4% interest and inflation is 6%, what is your real gain?", options: ["+2% Profit", "-2% Loss", "No Change", "+10% Profit"], correct: 1, explanation: "Real Return = Interest Rate - Inflation Rate. 4 - 6 = -2%." },

            // Set 3: Compounding Basics (9-12)
            { type: 'content', title: "The 8th Wonder", text: "Einstein called Compounding the 8th wonder. It's when your interest earns more interest. <br>Start at 25: Save ₹5k/mo @ 12% -> <b>₹9.5 Cr</b> at 60.<br>Start at 35: Save ₹5k/mo @ 12% -> <b>₹95 L</b> at 60.<br>10 years delay costs ₹8.5 Crores!<br><br>The math is simple but non-intuitive. In the beginning, your interest is small. But eventually, the interest on your interest becomes larger than your original investment. This exponential growth is why the 'Time' in market is more important than the 'Timing' of your entry.", icon: "✨" },
            { type: 'content', title: "The Snowball Effect", text: "Imagine rolling a snowball down a hill. At first, it's small. But as it rolls, it picks up more snow and gets huge. Money works the same. The first 5 years feel slow. The last 5 years are explosive.<br><br>If you invest for 20 years, almost 60% of your final wealth will come from the growth in just the last 5 years. This is why most people quit too early—they don't see the snowball getting big in the beginning. Patience is the price you pay for the massive reward at the bottom of the hill.", icon: "❄️" },
            { type: 'content', title: "Rule of 72", text: "So when does your money double? Divide 72 by the interest rate.<br><b>FD (6%):</b> 72/6 = 12 years.<br><b>Equity (12%):</b> 72/12 = 6 years.<br>Equity doubles your money twice as fast as FDs.<br><br>This rule works for everything, including debt. If you carry a credit card balance at 36% interest, the debt you owe doubles every 2 years! Use this rule to quickly estimate the power of your investments (or the danger of your loans) without needing a calculator. Higher returns accelerate the doubling time significantly.", icon: "➗" },
            { type: 'quiz', question: "At 12% return, how many years does it take to double your money?", options: ["12 Years", "6 Years", "10 Years", "8 Years"], correct: 1, explanation: "By Rule of 72: 72 / 12 = 6 years." },

            // Set 4: Asset Classes (13-16)
            { type: 'content', title: "Asset Class: Debt", text: "<b>Debt</b> means lending money (FDs, Bonds).<br><b>Risk:</b> Low.<br><b>Return:</b> Low (Fixed).<br><b>Role:</b> Safety and Stability. Use this for short-term goals.<br><br>When you put money in an FD, you are essentially a banker. You lend your money to the bank, and they pay you a fixed interest. It's very safe, but because the risk is low, the reward is also low. Debt is excellent for protecting the money you'll need in the next 1-3 years for things like a wedding or a house downpayment.", icon: "🛡️" },
            { type: 'content', title: "Asset Class: Equity", text: "<b>Equity</b> means owning a business (Stocks, Mutual Funds).<br><b>Risk:</b> High in short term.<br><b>Return:</b> High (Inflation beating).<br><b>Role:</b> Wealth Creation. Use this for long-term goals.<br><br>In equity, you are an owner, not a lender. If the company grows and profits, you share that growth. While prices can go down in the short term, the long-term history of the Indian market shows that businesses eventually reflect the growth of the nation. Equity is the most powerful vehicle for creating multi-generational wealth.", icon: "📈" },
            { type: 'content', title: "Asset Class: Gold", text: "<b>Gold</b> is a hedge. It usually protects against inflation and crisis. It doesn't produce anything (like a factory), but it holds value. Experts suggest 5-10% allocation to Gold.<br><br>Think of gold as an insurance policy for your portfolio. When markets crash or there is a war, gold usually shines. However, because a piece of gold doesn't generate profit or dividends on its own, it shouldn't be your primary investment. In India, the emotional attachment to gold is high, but we must treat it as a tool for safety, not just jewelry.", icon: "🥇" },
            { type: 'quiz', question: "Which asset class is best for long-term wealth creation?", options: ["Savings Account", "Debt / FD", "Equity / Stocks", "Physical Cash"], correct: 2, explanation: "Equity has historically outlawed all other asset classes over periods of 10+ years." },

            // Set 5: Planning & Budgeting (17-20)
            { type: 'content', title: "The 50-30-20 Rule", text: "A simple budgeting framework:<br><b>50% Needs:</b> Rent, Food, Bills.<br><b>30% Wants:</b> Movies, Travel.<br><b>20% Savings:</b> Investments.<br><br>The magic of this rule isn't the numbers, but the habit. If you wait until the end of the month to invest what's 'left over,' usually nothing is left. By automating your 20% into an SIP on the day your salary arrives, you force yourself to live on the remaining 80%. This one change is the single most common trait among the successful investors.", icon: "📐" },
            { type: 'content', title: "Concept: Tax Drag", text: "Returns aren't just what you earn; it's what you keep. FDs are taxed at 30% for many. Equities (LTCG) are taxed at 12.5%. This tax gap compounds hugely over 20 years.<br><br>If two people invest ₹1 Lakh and both earn 10%, but one pays 30% tax every year and the other pays only 12.5% at the end, the difference in their final wealth will be staggering. Always look at the 'Net-of-Tax' return. In India, equity-linked investments like ELSS offer some of the best post-tax growth available to the common man.", icon: "🧾" },
            { type: 'content', title: "Lifestyle Inflation", text: "As you earn more, you spend more. A ₹20k phone becomes a ₹80k phone. This is the biggest enemy of wealth. Try to keep expenses flat even as your salary grows.<br><br>When you get a 10% raise, don't buy a 10% more expensive car. Instead, increase your SIP by 10%. This is called 'investing your increments.' If you can maintain your current standard of living while your income increases, you accelerate your journey toward financial freedom by decades. Wealth is what you save, not what you show.", icon: "🛍️" },
            { type: 'quiz', question: "In the 50-30-20 rule, what does the 20 stand for?", options: ["Rent", "Wants", "Investment/Savings", "Taxes"], correct: 2, explanation: "20% of your income should go directly to investments before you spend anything." },

            // Set 6: Goal Setting (21-24)
            { type: 'content', title: "SMART Goals", text: "Don't say 'I want to be rich'. Say 'I need ₹1 Crore in 15 years for retirement'.<br><b>S</b>pecific<br><b>M</b>easurable<br><b>A</b>ctionable<br><b>R</b>elevant<br><b>T</b>ime-bound.<br><br>Vague goals lead to vague results. If you know exactly why you are saving (e.g., child's education in 2035), you are less likely to withdraw the money for a fancy vacation. A SMART goal gives your money a 'job' to do. When your money has a purpose, you develop the discipline to stay invested through market ups and downs.", icon: "🎯" },
            { type: 'content', title: "Good Debt vs Bad Debt", text: "<b>Good Debt:</b> Home Loan (Builds asset, saves rent).<br><b>Bad Debt:</b> Personal Loan / Credit Card EMI for a phone (Depreciating asset, high interest). Avoid bad debt like the plague.<br><br>Good debt is an investment in your future earning power or assets. Bad debt is a tax on your future self for a pleasure you want today. Interest on credit cards can be as high as 40%, which is a financial emergency. Never borrow money to buy things that lose value the moment you take them out of the box.", icon: "💳" },
            { type: 'content', title: "The Financial Freedom Number", text: "Rule of Thumb: 25x your annual expenses. If you spend ₹10L a year, you need ₹2.5 Crores to retire (assuming 4% withdrawal). This is your target.<br><br>Financial freedom isn't about being a billionaire. It's about having enough passive income so that you don't *have* to work. Once you hit your 'Magic Number,' work becomes a choice. You can live off the returns of your portfolio while the principal stays intact. This number is your actual destination in the flight of finance.", icon: "🏁" },
            { type: 'quiz', question: "Which of these is 'Bad Debt'?", options: ["Education Loan", "Home Loan", "Credit Card EMI for Vacation", "Business Loan"], correct: 2, explanation: "Borrowing at high interest for a depreciating experience (vacation) steals from your future." },

            // Final Card (25)
            { type: 'content', title: "Module Complete", text: "You now understand the basics: Inflation is the enemy, Equity is the vehicle, and Time is the fuel. Next, let's look at the myths holding you back.<br><br>By finishing this foundations module, you've already done more for your financial health than 90% of the population. You have the map; now you need the courage to follow it. In the next section, we will debunk common lies that fear-mongers use to keep you from investing. Great job, Pilot!", icon: "🎓" }
        ]
    },

    // MOD 1: Mythbusters
    {
        title: "Mythbusters",
        cards: [
            // Set 1: Risk & Gambling (1-4)
            { type: 'content', title: "Myth: Stock Market is Gambling", text: "<b>Reality:</b> Gambling is betting on luck (Casino). Investing is buying a business. If you bought TCS in 2004, you aren't gambling; you are a part-owner of India's biggest IT firm. Owners share profits.<br><br>When you gamble, the odds are always stacked against you in the long run. In investing, the 'odds' represent the growth of human innovation and the Indian economy. As an owner, you benefit from the hard work of thousands of employees and the wisdom of experienced management. It's about participation in growth, not just rolling the dice.", icon: "🎰" },
            { type: 'content', title: "Myth: 'High Risk = High Return'", text: "<b>Nuance:</b> <i>Managed</i> Risk = High Return. Buying a lottery ticket is High Risk, but Negative Return. Buying a Nifty 50 Index fund is Moderate Risk, High Return. Don't take blind risks.<br><br>The goal isn't to take the 'most' risk, but the 'right' risk. Blindly following a hot tip on a penny stock is high risk, but it's often 'uncompensated' risk—meaning you aren't being paid enough for the chance of losing everything. Smart investors look for risk that is calculated, diversified, and backed by strong business fundamentals.", icon: "⚠️" },
            { type: 'content', title: "Myth: 'I need to watch news daily'", text: "<b>Reality:</b> Daily news is noise. Warren Buffett lives in a small town, far from Wall Street. He reads annual reports, not ticker tapes. Reacting to news usually kills returns.<br><br>The 24-hour news cycle is designed to keep you anxious and glued to the screen, which leads to over-trading and emotional mistakes. A war in a distant country or a minor policy change might cause a 2% drop today, but it rarely changes the 10-year success of a great company. True wealth is built by focusing on the 'Signal' and ignoring the daily 'Noise'.", icon: "📺" },
            { type: 'quiz', question: "Investing in stocks is similar to:", options: ["Buying a Lottery Ticket", "Playing Poker", "Owning a piece of a business", "Betting on Horses"], correct: 2, explanation: "A share is a legal document of ownership in a functioning company." },

            // Set 2: Insurance & Start Capital (5-8)
            { type: 'content', title: "Myth: 'Insurance is Investment'", text: "<b>The Trap:</b> Agents sell 'Moneyback' or 'Endowment' policies. They give 4-5% returns (lower than inflation!).<br><b>Solution:</b> Buy Term Insurance (Pure protection) and Invest separately in Mutual Funds. Never mix insurance and investment.<br><br>Mixing the two usually results in poor insurance coverage AND poor investment returns. By buying a pure Term Plan, you get a much higher cover (like ₹1 Crore) for a tiny fraction of the cost. You can then invest the remaining money in an Index Fund, which will likely grow at double the rate of an insurance-linked savings plan.", icon: "🛡️" },
            { type: 'content', title: "Myth: 'I need Lakhs to start'", text: "<b>Reality:</b> You can start an SIP with ₹100. A vegetable vendor saving ₹500/month in a diversified fund for 20 years @ 15% would have ~₹7.5 Lakhs.<br><br>Waiting until you have a 'large sum' is the most expensive mistake you can make. Every month you delay is a month of compounding you lose forever. Even if you start with just the price of one weekend movie, you are building the 'Investment Muscle.' As your income grows, your SIP can grow, but starting early is much more important than starting big.", icon: "🤏" },
            { type: 'content', title: "Myth: 'I am too young/old'", text: "<b>Reality:</b> The best time was yesterday. The next best time is now. Compounding works at any age, but it works <i>best</i> if you give it time. Don't wait.<br><br>If you are young, your greatest asset isn't money; it's time. Even small amounts can grow into mountains. If you are starting late, you can still benefit from professional management to protect what you have and outpace inflation. It is never too early to start learning, and never too late to take control of your financial destiny and security.", icon: "⏳" },
            { type: 'quiz', question: "What is the primary purpose of Insurance?", options: ["To double money", "Risk Protection", "Tax Evasion", "Gambling"], correct: 1, explanation: "Insurance is to protect your dependents from financial shock, not to generate wealth." },

            // Set 3: Trading vs Investing (9-12)
            { type: 'content', title: "Myth: F&O Trading is Easy Money", text: "<b>The Harsh Truth:</b> SEBI released a 2024 study: <b>93% of retail F&O traders incur losses</b>. Average loss: ₹2 Lakh/person. It is not a side hustle; it's a profession requiring years of skill.<br><br>Social media influencers often show screenshots of 1 Lakh profit in a day, but they rarely show the 10 Lakh loss from the day before. Futures and Options (F&O) is a zero-sum game—for you to win, someone else must lose. Most retail investors are playing against highly sophisticated algorithms and institutional pros. Stick to long-term investing where everyone can win together.", icon: "🚫" },
            { type: 'content', title: "Myth: 'I can time the market'", text: "<b>Reality:</b> Missing just the 10 best days in the market over 20 years can cut your returns by 50%. You can't predict the best days. You have to BE in the market to catch them.<br><br>Market timing sounds great in theory: 'Buy low, sell high.' But in practice, most people get scared and sell when prices are low, and get greedy and buy when prices are high. The market often recovers the most when things look the darkest. Since you can't predict the future, 'Time IN the market' beats 'Timing THE market' every single time.", icon: "⏱️" },
            { type: 'content', title: "Myth: 'Experts' beat the market", text: "<b>Fact:</b> 80% of active large-cap fund managers fail to beat the Nifty 50 Index over 10 years. A low-cost Index Fund often performs better than expensive 'expert' funds.<br><br>Managing a fund comes with huge costs—salaries, offices, and marketing. These 'expense ratios' eat into your returns every year. An Index Fund is a simple, automated computer program that just buys the top 50 companies. Because it is so cheap to run, more of your money stays invested, which often leads to better results than the highest-paid experts in the long run.", icon: "👔" },
            { type: 'quiz', question: "According to SEBI 2024 data, what % of F&O traders lose money?", options: ["50%", "10%", "93%", "40%"], correct: 2, explanation: "93% lose money. It is extremely difficult for retail investors to win at F&O." },

            // Set 4: Real Estate & Gold (13-16)
            { type: 'content', title: "Myth: 'Real Estate never falls'", text: "<b>Reality:</b> Real Estate is illiquid. You can't sell 'one bedroom' if you need cash. Also, rental yields in India are low (2-3%). Equity beats Real Estate in Tier-1 cities over 20 years.<br><br>While property prices rarely show up as 'red' on an app, they do go through long periods of stagnation. Additionally, when you sell a house, you pay huge taxes, brokerage, and legal fees. If you have an emergency, you can't sell a small part of your house for cash. A diversified stock portfolio is much more flexible and has historically provided better net returns in India.", icon: "🏠" },
            { type: 'content', title: "Myth: 'Gold is the safest'", text: "<b>Reality:</b> Gold can be stagnant for decades (e.g., 2011-2019 saw nearly zero returns). It preserves power but doesn't multiply it like businesses (stocks) do.<br><br>Gold doesn't pay a dividend, it doesn't invent new technology, and it doesn't hire people to grow profits. It is simply a finite metal that people trust when they are scared. While it's great for diversification, putting all your money in gold is like keeping your wealth in a freezer—it might stay cold (safe), but it will never cook a meal (grow wealth).", icon: "🧱" },
            { type: 'content', title: "Myth: 'Renting is throwing money away'", text: "<b>Nuance:</b> If you pay ₹30k rent vs ₹60k EMI, and invest the ₹30k difference in SIPs, you might end up wealthier than the homeowner after 20 years. Run the math.<br><br>Homeownership is often an emotional decision rather than a purely financial one. When you factor in the interest paid on a 20-year home loan, the cost of maintainance, and the loss of flexibility to move for better jobs, renting can often be the smarter financial move. Take your time to build your 'Money Machine' before you bind yourself to a heavy 'Home EMI'.", icon: "🏚️" },
            { type: 'quiz', question: "What is a major disadvantage of Real Estate investment?", options: ["It's physical", "High Liquidity", "Illiquidity (Hard to sell quickly)", "Low cost"], correct: 2, explanation: "Real Estate takes months to sell and has high transaction costs, making it 'illiquid'." },

            // Set 5: Products & Tactics (17-20)
            { type: 'content', title: "Myth: IPOs are Easy Money", text: "<b>Example:</b> Paytm IPO listed in 2021 at ₹2150. By 2024, it was <₹400. IPOs are often priced high to maximize seller profit. Don't chase the hype; wait for track records.<br><br>Companies going public (IPOs) hire expensive investment bankers to create 'Hype' so they can sell shares at the highest possible price. As a retail investor, you are often buying at the 'peak' of the excitement. It's much safer to wait for a company to prove its profitability in the public market for 2-3 years before you commit your hard-earned money to it.", icon: "🔔" },
            { type: 'content', title: "Myth: 'Credit Cards make you poor'", text: "<b>Reality:</b> If you pay the <i>Full Amount</i> by the due date, it's an interest-free loan for 45 days + Rewards. It only destroys you if you pay the 'Minimum Due'.<br><br>Credit cards are like sharp kitchen knives—they are very useful tools if you know how to handle them, but dangerous if you are careless. By paying in full, you build a great credit score, which helps you get cheaper home or education loans later. The 'rewards' and 'cashbacks' are just the cherry on top. Never use them to spend money you don't already have in your bank.", icon: "💳" },
            { type: 'content', title: "Myth: 'Crypto is the new Gold'", text: "<b>Warning:</b> Crypto is unregulated and highly volatile. It can drop 80% in a week. It is a speculative asset, not a store of value like Gold or a productive asset like Stocks.<br><br>Unlike a company that has factories, customers, and profits, the value of a cryptocurrency is purely based on what someone else is willing to pay for it tomorrow. Because there is no regulator (like SEBI), hacks and scams are common. If you want to experiment with crypto, treat it like 'Fun Money' and never invest more than 1-2% of your total wealth into it.", icon: "🪙" },
            { type: 'quiz', question: "When are Credit Cards beneficial?", options: ["When paying Minimum Due", "When withdrawing cash", "When paying Full Amount on time", "Never"], correct: 2, explanation: "Paying in full avoids interest and builds your credit score." },

            // Set 6: Mindset (21-24)
            { type: 'content', title: "Myth: 'The Market is Rigged'", text: "While scams exist, the long-term trajectory of the market tracks the economy. If India grows from $3T to $10T economy, the market <i>will</i> grow. Don't let cynicism keep you poor.<br><br>People often point to famous scams like Harshad Mehta as a reason to stay away. But just like a few bad drivers don't stop you from using the roads, a few bad actors shouldn't stop you from using the greatest wealth creation engine in history. With the oversight of SEBI and digital transparency, the Indian market is now one of the most transparent and well-regulated in the world.", icon: "🇮🇳" },
            { type: 'content', title: "Myth: 'I will start next year'", text: "<b>Cost of Waiting:</b> Delaying SIP of ₹10k by 5 years can cost you ₹50 Lakhs in retirement corpus due to lost compounding. Today is the day.<br><br>'Next Year' never comes. There will always be a new phone to buy, a wedding to attend, or a market crash in the news. You will never feel 'ready' to start. The most successful investors aren't the ones who had a perfect plan, but the ones who started with a small, imperfect amount and let time do the heavy lifting. The cost of delay is the highest tax you will ever pay.", icon: "🗓️" },
            { type: 'content', title: "Myth: Diversification reduces returns", text: "<b>Reality:</b> It reduces <i>risk</i> of ruin. If you go 100% into one stock, you might win big or go to zero. Diversification ensures you stay in the game long enough to win.<br><br>Many people think they can get rich quickly by 'All In' betting on one stock idea. This is survivorship bias—for every person who gets rich on one stock, thousands lose everything. By spreading your money across different sectors (Banking, IT, Pharma, etc.), you ensure that one bad business doesn't destroy your entire life's work. It's the only 'free lunch' in the world of finance.", icon: "🥗" },
            { type: 'quiz', question: "What is the primary benefit of Diversification?", options: ["Guaranteed 20% return", " Zero Risk", "Protection from single-asset failure", "Double tax benefits"], correct: 2, explanation: "Don't put all eggs in one basket. If one breaks, others survive." },

            // Final (25)
            { type: 'content', title: "Myth: Busted", text: "You now know that Investing > Gambling, Time > Timing, and Equity > Gold for wealth. Next, let's look at the actual tools (Options) available to you.<br><br>Congratulations, Pilot! You've cleared the fog of misinformation that paralyzes most people. By debunking these myths, you've developed the 'Investor Mindset' needed to survive the simulations ahead. Knowledge is your armor against the fear-mongering news cycle. Now, let's dive into the actual toolkit of financial instruments you can use to build your future.", icon: "🔨" }
        ]
    },

    // MOD 2: Investment Options
    {
        title: "Investment Options",
        cards: [
            // Set 1: Foundation (1-4)
            { type: 'content', title: "The Hierarchy", text: "Think of a Pyramid.<br><b>Base:</b> Health/Term Insurance + Emergency Fund.<br><b>Middle:</b> Nifty 50 / Mutual Funds.<br><b>Top:</b> Direct Stocks / Gold.<br>Don't build the top before the base.<br><br>Most people jump into picking 'hot stocks' before they even have health insurance or an emergency fund. This is like building a penthouse on a foundation of sand. If a crisis hits, you'll be forced to sell your stocks at the worst possible time. Secure your base first so your wealth can grow undisturbed.", icon: "🔺" },
            { type: 'content', title: "Emergency Fund", text: "Before investing, keep 6 months of living expenses in a Liquid Fund or FD. This is your oxygen mask. If you lose your job, you shouldn't have to sell your shares at a loss.<br><br>Life happens—job losses, health scares, or urgent repairs. Without this cushion, you are always one 'bad month' away from financial ruin. Having 6 months of cash parked safely gives you the mental peace (the 'Zen' of investing) to keep your SIPs running even when the market is crashing. It is the fuel for your long-term courage.", icon: "🚑" },
            { type: 'content', title: "Term Insurance", text: "Pure Life Cover. If you die, your family gets ₹1 Crore. Premium is low (e.g., ₹10k/year). <b>Action:</b> Get coverage of 20x your annual income.<br><br>Don't treat insurance as an investment; treat it as protection. A term plan offers the highest possible cover for the lowest possible cost. It ensures that even if you aren't around, your family's dreams (like your children's education or a debt-free home) stay alive. It is the single most important document in your financial folder.", icon: "☂️" },
            { type: 'quiz', question: "How large should an Emergency Fund be?", options: ["1 month expenses", "6 months expenses", "₹10,000", "5 years salary"], correct: 1, explanation: "6 months is the standard recommendation to cover job loss or medical emergencies." },

            // Set 2: Safe Assets (5-8)
            { type: 'content', title: "Fixed Deposits (FD)", text: "<b>Safety:</b> High.<br><b>Return:</b> ~7%.<br><b>Drawback:</b> Taxed at your slab. Post-tax return often fails to beat inflation. Good for short term (1-3 years).<br><br>In India, FDs are the default 'safe' choice, but they have a hidden cost: Taxes. If you are in the 30% tax bracket, a 7% FD only gives you 4.9% in hand. If inflation is 6%, you are actually losing purchasing power. Use FDs for money you need within 2 years, but don't expect them to create long-term wealth.", icon: "🔒" },
            { type: 'content', title: "PPF (Public Provident Fund)", text: "<b>Govt Backed.</b><br><b>Return:</b> ~7.1%.<br><b>Lock-in:</b> 15 Years.<br><b>Superpower:</b> EEE (Exempt-Exempt-Exempt). No tax on investment, interest, or withdrawal.<br><br>PPF is the most powerful debt tool for Indian residents. Because it is backed by the government, the interest is guaranteed and entirely tax-free. The 15-year lock-in is a 'discipline feature' that prevents you from dipping into your retirement fund for temporary desires. It's the ultimate 'Safe Haven' for your long-term financial security.", icon: "🇮🇳" },
            { type: 'content', title: "Gold (SGB)", text: "<b>Sovereign Gold Bond:</b> Better than physical gold. <br>1. Govt pays 2.5% interest/year.<br>2. Price appreciation of gold.<br>3. No making charges.<br>4. Tax-free on maturity (8 years).<br><br>SGBs are the smartest way to own gold in India. Unlike jewelry, you don't lose money on making charges or storage fees. In fact, the government actually *pays you* to hold the bond. If you hold it until maturity (8 years), the profit you make is entirely free from capital gains tax. It is truly 'Gold 2.0' for the modern investor.", icon: "🥇" },
            { type: 'quiz', question: "Which Gold investment pays extra interest?", options: ["Gold Jewelry", "Digital Gold", "Sovereign Gold Bond (SGB)", "Gold ETF"], correct: 2, explanation: "Only SGB pays 2.5% interest on top of gold price appreciation." },

            // Set 3: Mutual Funds (9-12)
            { type: 'content', title: "Mutual Funds Explained", text: "You give money to a professional (Fund Manager). They pool it from thousands of people and buy stocks. You get 'units' in return. It's the best way for beginners to enter equity.<br><br>Mutual funds give you instant diversification. With just ₹500, you can own a tiny slice of 50-100 different companies. If one company fails, the impact on your total money is minimal. It's like taking a bus (managed by a professional driver) instead of trying to drive the car (picking stocks) yourself through the dangerous market highways.", icon: "🤝" },
            { type: 'content', title: "Index Funds", text: "<b>Passive Investing.</b> The manager simply buys the top 50 companies (Nifty 50). No brain usage, low fee. Historically beats 80% of active managers. Warren Buffett recommends this for everyone.<br><br>Active managers charge high fees to 'beat' the market, but most fail. An Index Fund just follows the market at a fraction of the cost. Because the fees are so low, more of your money stays invested and compounds. Over 20 years, the difference in fees can amount to millions of rupees saved. It is the 'honest' way to invest in India's growth.", icon: "🚜" },
            { type: 'content', title: "ELSS (Tax Saving MF)", text: "Equity Linked Savings Scheme. <br><b>Benefit:</b> Tax deduction under 80C.<br><b>Lock-in:</b> 3 Years (Lowest of all tax savers).<br><b>Growth:</b> High (Equity).<br><br>ELSS is the only tax-saving option that puts your money into the stock market. While options like LIC or PPF take 5-15 years, ELSS sets you free in just 3 years. This lock-in period is actually a blessing—it stops you from panic selling during a temporary market dip. For many, ELSS is the first step toward understanding the power of equity and compounding.", icon: "💰" },
            { type: 'quiz', question: "What is the lock-in period of ELSS Funds?", options: ["5 Years", "15 Years", "3 Years", "1 Year"], correct: 2, explanation: "3 Years is the shortest lock-in among 80C options (PPF is 15y, FD is 5y)." },

            // Set 4: Advanced Assets (13-16)
            { type: 'content', title: "Direct Equity (Stocks)", text: "Buying shares of specific companies (e.g., Reliance, Tata Motors).<br><b>Reward:</b> High (can multi-bag).<br><b>Risk:</b> High (company can fail).<br>Requires time and research skill.<br><br>Direct equity is not a hobby; it's a serious business. To succeed, you must study balance sheets, listen to management calls, and track industry trends. If you can't dedicate 10 hours a week to research, you're better off with Mutual Funds. One bad stock can wipe out your gains from ten good ones. Proceed only if you enjoy the 'detective work' of finance.", icon: "🏢" },
            { type: 'content', title: "REITs (Real Estate)", text: "Like Mutual Funds for buildings. You own a tiny slice of a Tech Park. You get dividends from the rent collected. Good for diversification.<br><br>In India, real estate has a high entry barrier (Lakhs/Crores). REITs change that. You can invest ₹500 and start receiving regular 'rental income' in your bank account from grade-A commercial properties (like malls and IT parks). They are professionally managed, highly liquid (can be sold on the app instantly), and provide a great hedge against stock market volatility.", icon: "🏙️" },
            { type: 'content', title: "NPS (National Pension System)", text: "Dedicated retirement product. Low cost. Mix of Equity and Debt. Extra ₹50k tax benefit under 80CCD(1B). Lock-in until age 60.<br><br>NPS is a 'pension' scheme for the modern world. It forces you to stay invested until you retire, which is the best thing that can happen to your compounding. You get an additional tax break which is not available in any other instrument. While the money is locked, it creates a disciplined retirement 'envelope' that ensures you'll never be financially dependent on anyone in your old age.", icon: "👴" },
            { type: 'quiz', question: "REITs allow you to invest in:", options: ["Gold", "Real Estate / Commercial Properties", "Government Bonds", "Agriculture"], correct: 1, explanation: "Real Estate Investment Trusts trade like stocks but own properties." },

            // Set 5: Execution Strategy (17-20)
            { type: 'content', title: "Direct vs Regular Plans", text: "<b>Crucial:</b> 'Regular' MF plans pay commissions to agents forever (~1%). 'Direct' plans have zero commission. Always choose Direct. 1% difference over 20 years = Lakhs.<br><br>Agents will try to sell you 'Regular' plans because it's their income, not yours. That 1% might look small today, but when your portfolio is ₹1 Crore, that 'small' fee is ₹1 Lakh every single year! By switching to Direct plans on apps like Groww or Zerodha, you keep all of your hard-earned profits. Every rupee saved in fees is a rupee that compounds for your future.", icon: "🎯" },
            { type: 'content', title: "SIP (Systematic Investment)", text: "Automated investing. ₹5000 is deducted every 5th of the month. Removing human emotion (greed/fear) is the key to wealth. It makes you disciplined.<br><br>An SIP is like an EMI, but it pays *you* instead of the bank. It uses 'Rupee Cost Averaging'—when the market falls, your ₹5000 buys more units; when it rises, it buys fewer. You don't need to time the market; you just need to survive it. History shows that the person who stays in an SIP for 15 years almost always wins against the person who tries to be 'smart'.", icon: "🔄" },
            { type: 'content', title: "Step-Up SIP", text: "Increase your SIP by 10% every year as your salary hikes. This small hack can double your final corpus compared to a flat SIP.<br><br>If your income grows by 10% every year but your investment stays the same, you are missing out on the greatest wealth-building hack. By simply increasing your SIP amount slightly every year, you reach your goals much faster. It's the most effective way to combat 'Lifestyle Inflation'—spending your raises on things you don't need instead of the freedom you deserve.", icon: "🚀" },
            { type: 'quiz', question: "Why choose 'Direct' Mutual Funds?", options: ["They are faster", "Higher Returns (Lower Fees)", "Better customer service", "Guaranteed profit"], correct: 1, explanation: "Direct plans save you the distributor commission, leading to higher NAV." },

            // Set 6: Risky Assets (21-24)
            { type: 'content', title: "Corporate Bonds", text: "Lending to companies. Higher interest than FD (9-10%), but higher risk. If the company goes bankrupt (like DHFL), you lose principal. Stick to 'AAA' rated bonds.<br><br>Many people chase 'High Yield' bonds in unknown companies, but this is a dangerous game. Unlike a bank FD, there is no insurance if a company defaults. Treat bonds as a supplement to your FDs, but never put your life savings into anything rated below 'AA'. In the world of debt, safety of your 'principal' is more important than the extra 2% return.", icon: "📜" },
            { type: 'content', title: "P2P Lending", text: "Lending directly to strangers via apps. Returns 12-18%. Very High Risk of default. Only put money you are willing to lose completely.<br><br>P2P (Peer-to-Peer) lending apps connect you to borrowers like small shopkeepers or individuals needing a loan. While the high interest is tempting, you are acting as a mini-bank without the bank's resources to collect debt. If the economy slows down, defaults can spike. This is highly speculative; treat it more like an experiment than a core investment strategy for your future.", icon: "🤝" },
            { type: 'content', title: "Cryptocurrency", text: "Digital tokens (BTC, ETH). <b>Pros:</b> Decentralized, high potential gain.<br><b>Cons:</b> No underlying asset, regulatory risk, extreme volatility. Limit to <5% of portfolio.<br><br>Crypto doesn't have a balance sheet, employees, or government backing. Its price is purely driven by supply and demand. While some have made fortunes, many have lost everything overnight due to hacks or crashes. If you must buy crypto, think of it as 'Play Money.' Never bet your retirement or your child's education on an asset that could drop 90% while you are asleep.", icon: "₿" },
            { type: 'quiz', question: "What does 'AAA' rating indicate in Bonds?", options: ["Highest Safety / Low Default Risk", "Highest Return", "Government Bond", "Tax Free"], correct: 0, explanation: "AAA is the highest credit rating, implying the issuer is very likely to pay back." },

            // Final (25)
            { type: 'content', title: "Toolkit Ready", text: "You now know the menu card of finance. Don't eat everything. Pick a balanced diet (Equity + Debt + Gold). Next, let's look at your Rights & Safety.<br><br>Fantastic job, Pilot! You've successfully mapped out the various terrains of the financial world. You now know which vehicles are for speed (Equity), which are for safety (PPF), and which are for emergencies (Liquid Funds). But having the tools is not enough—you must also know how to protect yourself from scammers and market hunters. In the next module, we'll cover 'Rights & Safety'. Stay sharp!", icon: "🧰" }
        ]
    },

    // MOD 3: Rights & Safety
    {
        title: "Rights & Safety",
        cards: [
            // Set 1: Regulators (1-4)
            { type: 'content', title: "The Watchdog: SEBI", text: "<b>SEBI</b> regulates the stock market. Their job is to protect YOU, the small investor. They can ban fraudulent brokers, fine companies, and reverse illegal trades.<br><br>SEBI ensures that the 'game' of investing is fair for everyone. They enforce strict rules on how brokers handle your money and how companies disclose their financial health. If you feel cheated or see suspicious activity in your account, SEBI is the ultimate authority you can turn to for justice. Their presence is what makes the Indian market a safe place for your life savings.", icon: "⚖️" },
            { type: 'content', title: "The Watchdog: RBI", text: "<b>RBI</b> regulates Banks and NBFCs. They ensure your bank deposits (up to ₹5L) are insured. If a bank fails, DICGC covers you.<br><br>The Reserve Bank of India acts as the 'Lender of Last Resort' and the guardian of the nation's monetary stability. Beyond just insuring your deposits, they control the interest rates and set the digital hygiene standards for all banking apps. When you see a bank's license being cancelled or a merger happening, it's often the RBI stepping in to protect the depositors' hard-earned money.", icon: "🏦" },
            { type: 'content', title: "Your Broker (Demat)", text: "Zerodha/Groww are just the interface. Your stocks are actually held with <b>CDSL or NSDL</b> (Depositories). Even if Zerodha shuts down, your stocks are safe with CDSL.<br><br>Think of your broker as a 'gatekeeper' and the depository as the 'vault.' Your shares are held in electronic form in your own name at the national level. Even if your broker goes bankrupt tomorrow, your shares remain your property. You can simply transfer them to another broker and continue your journey. This system is one of the most robust and secure in the world.", icon: "🔐" },
            { type: 'quiz', question: "Who regulates the Stock Market in India?", options: ["RBI", "SEBI", "SBI", "Govt of India"], correct: 1, explanation: "Securities and Exchange Board of India (SEBI) is the regulator." },

            // Set 2: Account Safety (5-8)
            { type: 'content', title: "Nomination: Critical", text: "<b>The ₹35,000 Cr Problem:</b> Unclaimed money lies in banks because account holders died without nominees. Always add a nominee. It ensures your family gets access without legal battles.<br><br>Without a nominee, your heirs might have to spend years in court proving they are the rightful owners of your wealth. Adding a name takes exactly 2 minutes on most apps but saves decades of headache for your loved ones. Treat it as the final, most important step of your account opening process. Your wealth is only truly yours if it can reach those you care about.", icon: "📝" },
            { type: 'content', title: "PoA vs DDPI", text: "<b>Power of Attorney:</b> Gave brokers too much power. <br><b>New Standard:</b> DDPI (Demat Debit Pledge Instruction). It is safer and specific only for selling stocks you order. Never sign a blank PoA.<br><br>In the past, some brokers misused Power of Attorney (PoA) to move clients' shares without permission. SEBI introduced DDPI to fix this. It is a limited authority that only allows the broker to debit shares when you explicitly place a 'Sell' order. Always check your app settings to ensure you haven't granted unnecessary permissions that could put your portfolio at risk.", icon: "✒️" },
            { type: 'content', title: "Contract Notes", text: "After every trade (buy/sell), you must receive a <b>Contract Note</b> via email within 24 hours. It proves the trade actually happened. If you don't get it, report immediately.<br><br>The contract note is your legal proof of ownership and the price at which you traded. It includes details of the brokerage, taxes (STT, GST), and exchange charges. If a broker claims you 'bought' something but doesn't send a contract note, it could mean they are 'bucket trading' (betting against you) instead of putting your order in the market. Always audit these emails.", icon: "📄" },
            { type: 'quiz', question: "What should you ensure every Bank/Demat account has?", options: ["Credit Card", "Cheque Book", "Nominee", "Locker"], correct: 2, explanation: "A Nominee is crucial for smooth transfer of assets after death." },

            // Set 3: Scams (9-12)
            { type: 'content', title: "Ponzi Schemes", text: "<b>Promise:</b> 'Double your money in 3 months'.<br><b>Reality:</b> They pay old investors using new investors' money. Eventually, they run. <br><b>Flag:</b> Any 'Guaranteed' return > FD rate (7%) is suspicious.<br><br>If a scheme sounds too good to be true, it is. Scammers use fancy offices, fake screenshots, and celebrity endorsements to look legitimate. But math doesn't lie: no business on earth can guaranteed 10% monthly returns forever. The moment the 'new money' stops coming in, the entire house of cards collapses, and the founders disappear with your principal. Stay boring, stay safe.", icon: "🔻" },
            { type: 'content', title: "Pump & Dump", text: "Tip on Telegram: 'Buy PENNYSTOCK at ₹5, Target ₹50!'. <br><b>Reality:</b> Scammers bought at ₹2. They hype it. You buy at ₹5. Price hits ₹8. They sell (Dump). Price crashes to ₹1. You lose.<br><br>Telegram and WhatsApp 'stock tips' groups are often traps set by operators. They buy a low-volume stock, pay 'influencers' to hype it up, and then sell their shares to the excited crowd. By the time you realize the 'tip' was a lie, the stock has hit a lower circuit, and you can't even sell it to get your money back. Never buy a stock based on a stranger's message.", icon: "💣" },
            { type: 'content', title: "Fake Trading Apps", text: "Apps looking like 'Zerodha Pro' or 'Groww max'. You transfer money, graph goes up. You try to withdraw, they ask for 'Tax Fee'. You pay, they block you. Only download from official stores.<br><br>Many scammers create high-quality fake apps that look exactly like popular brokers. They might even show you 'fake' profits to encourage you to invest more. But these apps are not connected to the real stock exchange. Once your money goes into their private wallet, it is gone. Always verify that your broker is SEBI registered and use only the links provided on their official websites.", icon: "📱" },
            { type: 'quiz', question: "A scheme promises 20% guaranteed monthly returns. It is likely:", options: ["A great opportunity", "A Ponzi/Scam", "A Government Scheme", "A High Yield Bond"], correct: 1, explanation: "Guaranteed high returns are impossible. It is a mathematical certainty of a scam." },

            // Set 4: Digital Hygiene (13-16)
            { type: 'content', title: "The OTP Rule", text: "<b>Golden Rule:</b> No Bank, Broker, or SEBI official will EVER ask for your OTP. If a caller asks for OTP to 'block a fraud' or 'update KYC', they are the fraudster.<br><br>OTP stands for One-Time Password, and it is the final lock on your vault. Scammers are experts at 'Social Engineering'—they will sound professional, create a sense of urgency, and even know your personal details. But regardless of the story they tell, the moment they ask for that 6-digit code, you should hang up and block them. Your OTP is for you and nobody else.", icon: "🤳" },
            { type: 'content', title: "Phishing Emails", text: "Email from 'Incometax-india@gmail.com' saying 'Refund Approved, click link'. <br><b>Check:</b> Official emails come from 'incometax.gov.in', not gmail. Hover over links before clicking.<br><br>Phishing is like casting a wide net to see who bites. The link in the email will lead to a fake website that looks like your bank's login page. If you enter your password there, the scammer captures it instantly. Always check the sender's email address carefully (e.g., 'hdfcbanc.com' instead of 'hdfcbank.com'). When in doubt, go directly to the official app or website instead of clicking links.", icon: "🎣" },
            { type: 'content', title: "Remote Access Scam", text: "Scammer asks you to install 'AnyDesk' or 'TeamViewer' to 'fix' your phone. Once installed, they see your screen, read your OTPs, and empty your account.<br><br>These apps are legitimate tools for IT support, but in the hands of a scammer, they are a weapon. Once they have 'remote access,' they can see your banking password as you type it and see the OTP as it pops up in your notifications. Never install any app recommended by a caller, and never give a stranger control over your device, no matter how helpful they seem.", icon: "💻" },
            { type: 'quiz', question: "A bank manager calls asking for OTP to stop a hack. You should:", options: ["Give OTP quickly", "Hang up and Block", "Ask for ID card", "Call Police"], correct: 1, explanation: "Bank managers never ask for OTPs. It is 100% a scammer." },

            // Set 5: Grievance Redressal (17-20)
            { type: 'content', title: "Step 1: The Broker", text: "If you have an issue (funds not credited, bad order), first email your broker's compliance officer. They are legally required to respond.<br><br>Every SEBI-registered broker must have a dedicated grievance cell. Keep a record of all your emails and the tickets you raise. Most issues are simply technical glitches and are resolved within 48 hours if you follow the official channel. Don't waste your time arguing with customer support agents on the phone; 'Write' an email to the Compliance Officer for a paper trail.", icon: "1️⃣" },
            { type: 'content', title: "Step 2: SEBI SCORES", text: "If broker ignores you, log a complaint on <b>SEBI SCORES</b> (scores.gov.in). It is a powerful portal where SEBI forces the broker to resolve the issue.<br><br>SCORES is a centralized web-based complaint redressal system. Once you lodge a complaint here, the broker is under a deadline to provide a satisfactory resolution to SEBI. If the broker is found at fault, SEBI can take strict action against them. It is your strongest right as a retail investor, ensuring that even the smallest shareholder has a voice against the largest brokerages.", icon: "2️⃣" },
            { type: 'content', title: "Step 3: Ombudsman", text: "For Banking/Insurance issues, RBI and IRDAI have Ombudsmen. They are neutral arbitrators who can order the bank to compensate you.<br><br>The Ombudsman is like a free judge for financial services. If your bank has wrongly deducted money or your insurance claim was unfairly rejected, you don't need a lawyer. You can approach the Ombudsman once you've exhausted the bank's internal complaint process. Their decisions are binding on the financial institutions, providing a high level of protection to the common citizen.", icon: "3️⃣" },
            { type: 'quiz', question: "Where do you complain if a broker cheats you?", options: ["Twitter", "SEBI SCORES", "WhatsApp", "Change.org"], correct: 1, explanation: "SCORES is the official grievance system backed by the regulator." },

            // Set 4: Psychology of Safety (21-24)
            { type: 'content', title: "Greed is the Vulnerability", text: "Scammers don't hack computers; they hack human greed. They offer 'Easy Money'. If you accept that wealth takes time, you become immune to 99% of scams.<br><br>The greatest defense against fraud is not a better password, but a better mindset. When you accept that there are no shortcuts to building a Crore, the 'Double your money' offer looks like a threat, not an opportunity. Rationality is your firewall. Every time you are tempted, ask yourself: 'If this were so easy, why is the caller telling me instead of doing it themselves?'", icon: "🧠" },
            { type: 'content', title: "The 'Tip' Fraud", text: "Scammer calls 50 people saying Buy, 50 saying Sell. One group wins and thinks he is a genius. They pay for the next tip. It's just probability, not skill.<br><br>This is a classic 'Selection Bias' scam. By splitting their audience, they ensure a small group always sees a consistent 'win.' To that group, the scammer looks like a god who can predict the future. They then ask for a massive 'subscription fee' for the next tip, which will likely be wrong. Don't be fooled by past accuracy; true investment skill is about process, not just guessing the next move.", icon: "📞" },
            { type: 'content', title: "Social Engineering", text: "They stalk your LinkedIn. They call knowing your name, job, and mother's name. 'Hi Jeet, calling from your office bank...'. Don't trust caller ID or personal info.<br><br>Scammers use public information to build trust and lower your guard. Knowing your name or your bank doesn't prove they are official. In the digital age, your data is often leaked from various sources. Always be skeptical of 'Personal' calls that lead to 'Financial' requests. If you get such a call, hang up and call the official customer service number back yourself to verify.", icon: "🎭" },
            { type: 'quiz', question: "Why do 'Tipsters' seem successful initially?", options: ["They are experts", "They use Insider Info", "Statistical probability (Luck)", "Market manipulation"], correct: 2, explanation: "By splitting predictions, they guarantee half their audience sees a 'win' purely by chance." },

            // Final (25)
            { type: 'content', title: "Safe & Secure", text: "You are now armed with rights and safety protocols. The foundations are set. Now, let's play the Long Game and see how wealth is actually built.<br><br>Shields up, Pilot! You've successfully navigated the asteroid belt of scams and frauds. By knowing your rights and the watchdogs that protect you, you are already more secure than most experienced investors. The safety of your assets is the foundation upon which your future wealth will sit. Now that the 'defenses' are ready, it's time to learn the art of the 'Long Game'.", icon: "🏰" }
        ]
    },

    // MOD 4: The Long Game
    {
        title: "The Long Game",
        type: "simulation_first",
        cards: [
            // Set 1: History lessons (1-4)
            { type: 'content', title: "De-Brief: The COVID Crash", text: "March 2020: Market fell 38%. The world seemed to be ending. <br><b>Result:</b> Those who sold booked losses. Those who did nothing recovered fully in 9 months. Optimism always wins eventually.<br><br>The COVID crash was a classic example of 'Black Swan' event—something no one saw coming. While the headlines were full of fear, the underlying businesses continued to adapt and innovate. If you had stopped your SIPs then, you would have missed the fastest recovery in market history. Remember: the market doesn't just crash; it also 'crashes upward' when the world finds a solution.", icon: "📉" },
            { type: 'content', title: "History Repeats: 2008", text: "2008 Financial Crisis: Market fell 60%. It took 3 years to recover. <br><b>Lesson:</b> Crashes are features, not bugs. They happen every 8-10 years. Expect them. Prepare for them.<br><br>In 2008, the global banking system was on the verge of collapse. To a beginner, a 60% drop feels like the end of wealth. But for a seasoned investor, it was the sale of a lifetime. If you can't survive a 60% drop on paper, you'll never enjoy the 600% gain that usually follows a decade later. Volatility is not risk; it's the price you pay for admission to the wealth machine.", icon: "📚" },
            { type: 'content', title: "The Maggi Crisis", text: "2015: Maggi banned. Nestle stock crashed 50%. <br><b>Reality:</b> Strong brands survive. The stock is now 5x higher. Don't panic sell quality companies due to temporary news.<br><br>When Nestle faced the Maggi ban, everyone thought the company was finished. This is 'Recency Bias' at work—thinking the current bad news will last forever. But great companies have 'moats' and strong management that can navigate crises. By holding through the noise, you allow the quality of the business to eventually overpower the headlines. Short-term news is a distraction; long-term earnings are the truth.", icon: "🍜" },
            { type: 'quiz', question: "What is the historical outcome of every major market crash?", options: ["Permanent Zero", "Recovery and New Highs", "Market closes down", "Government bans trading"], correct: 1, explanation: "Every bear market in history has eventually been followed by a bull market." },

            // Set 2: Volatility (5-8)
            { type: 'content', title: "Volatility is the Fee", text: "If you want 15% equity returns, you must pay the price of seeing your portfolio drop 20% sometimes. If you can't handle the Red, you don't deserve the Green.<br><br>Most people want the high returns of the stock market but the 'safety' of a bank FD. This is impossible. The market pays you *because* you are willing to sit through the uncertainty. Think of volatility as the 'toll' on the highway to wealth. If you turn back every time you see a toll booth, you'll never reach your destination. Embrace the red as a necessary part of the journey.", icon: "🎢" },
            { type: 'content', title: "Rupee Cost Averaging", text: "When market falls, your SIP buys MORE units. When it rises, it buys FEWER. This auto-averages your cost. You don't need to time the bottom; SIP captures it for you.<br><br>This is the most powerful 'automatic' feature of your investment journey. You don't need to be an expert who predicts the low. In fact, a falling market is a gift for an SIP investor because you are accumulating 'wealth units' at a discount. When the market eventually turns around, those cheap units act as a booster rocket for your portfolio's growth. The crash is your secret friend.", icon: "⚖️" },
            { type: 'content', title: "Time in the Market", text: "Data shows that over a 15-year period, the probability of negative returns in Nifty is <b>0%</b>. In the short run (1 year), it's a coin toss. Lengthen your horizon.<br><br>If you look at the market every day, you see 50/50 odds of growth or loss. If you look at it every month, the odds of profit improve. But if you look at it once every 10 years, historical data shows you almost always win. The best thing you can do for your money is to 'ignore' it for long periods. Your job is to stay in the game, not to win every single quarter.", icon: "⏳" },
            { type: 'quiz', question: "What happens to your SIP when the market crashes?", options: ["It stops", "It buys fewer units", "It buys MORE units", "It loses money forever"], correct: 2, explanation: "Low prices mean your fixed SIP amount purchases more units, aiding recovery." },

            // Set 3: Behavioral Biases (9-12)
            { type: 'content', title: "Loss Aversion", text: "The pain of losing ₹100 is 2x stronger than the joy of gaining ₹100. This biology makes us sell at the bottom to 'stop the pain'. You must fight your DNA.<br><br>Our ancestors survived by being afraid of shadows in the jungle. That same biology now makes us panic when we see a red number on an investment app. But the stock market is not a jungle, and a price drop is not a tiger. To be a successful investor, you must learn to recognize this 'Fear Circuit' and override it with logic. Awareness of your bias is the first step toward conquering it.", icon: "🧬" },
            { type: 'content', title: "Recency Bias", text: "If market rose last year, we think it will rise this year. If it fell, we think it will keep falling. <b>Reality:</b> Markets function in cycles. What went up will revert to mean.<br><br>We have a natural tendency to drive the car while looking only at the rear-view mirror. If the last few months have been profitable, we get overconfident and take too much risk. If they've been bad, we get depressed and stop investing. But the most important thing to remember is 'Mean Reversion'—extreme performance in either direction usually pulls back to a long-term average soon. Stay balanced.", icon: "🔄" },
            { type: 'content', title: "Herd Mentality", text: "Everyone is buying Crypto? I should too. Everyone is selling Stocks? I should too. <br><b>Warren Buffett:</b> 'Be fearful when others are greedy, and greedy when others are fearful.'<br><br>The 'Herd' is almost always wrong at the extremes. When everyone at a wedding is talking about a certain stock, it's usually already too expensive. When everyone is saying the market is 'dead,' it's usually the best time to buy. Developing the courage to walk in the opposite direction of the crowd is what separates a Wealth Creator from a common participant. Follow the process, not the people.", icon: "🐑" },
            { type: 'quiz', question: "Buying something just because everyone else is buying it is called:", options: ["Smart Investing", "Herd Mentality", "Diversification", "Technical Analysis"], correct: 1, explanation: "Following the crowd often leads to buying at the top and selling at the bottom." },

            // Set 4: The Coffee Can (13-16)
            { type: 'content', title: "Coffee Can Investing", text: "The best portfolios belong to dead people (literally). Why? They didn't trade. They bought good stocks and forgot them. Inactivity is a superpower in investing.<br><br>Most investors are their own worst enemies—they 'churn' their portfolio, sell toys to buy more losers, and pay huge taxes/fees in the process. A 'Coffee Can' portfolio is one where you pick great companies or index funds and then 'forget' the password for 10 years. This lack of activity allows compounding to work its magic undisturbed by your own emotions. Practice the art of doing nothing.", icon: "☕" },
            { type: 'content', title: "Noise vs Signal", text: "<b>Noise:</b> Elections, Wars, Fed Rates, TV Debates. <br><b>Signal:</b> Corporate Earnings, GDP Growth. <br>Ignore the noise. Focus on the signal.<br><br>The media sells urgency because urgency sells ads. They will tell you that the next election or a minor rate hike will 'change everything.' It won't. In the long run, the only thing that drives your wealth is the growth of the companies you own. If those companies are making more profit this year than last year, the stock price will eventually follow. Turn off the news; turn on the patience.", icon: "🔇" },
            { type: 'content', title: "The 15-15-15 Rule", text: "Invest ₹15,000/month for 15 Years at 15% Return. <br><b>Result:</b> ~₹1 Crore. <br>Consistency beats brilliance. You don't need a lucky stock; you need a boring SIP.<br><br>This rule is the ultimate proof that you don't need a high IQ or inside information to become a Crorepati. You just need a decent income, a simple index fund, and the discipline to not touch the money for 15 years. It's not about'winning big' once; it's about 'not losing' for a long time. The person who starts today and never stops is the one who wins the long game of life.", icon: "🔢" },
            { type: 'quiz', question: "Which investor typically earns higher returns?", options: ["Day Trader", "Passive Long-term Investor", "News Follower", "Frequent Churner"], correct: 1, explanation: "Passive investors save on fees, taxes, and mistakes, and let compounding run uninterrupted." },

            // Set 5: Retirement & Withdrawal (17-20)
            { type: 'content', title: "Financial Freedom", text: "It's not about Ferraris. It's about 'F-You Money'. The ability to say no to a toxic boss, take a gap year, or pursue art. Money buys Freedom, not just things.<br><br>True wealth is measured by the number of days you can live without a paycheck. Once you have enough invested to cover your needs, you stop being a slave to the clock. You can choose work that gives you meaning instead of just survival. This 'Freedom of Time' is the most valuable asset you will ever own. It's the point where you stop working for money and money starts working for you.", icon: "🕊️" },
            { type: 'content', title: "FIRE Movement", text: "Financial Independence, Retire Early. <br><b>Lean FIRE:</b> Basic expenses covered.<br><b>Fat FIRE:</b> Luxury expenses covered. <br>The goal is to own your time.<br><br>FIRE is not about sitting on a beach; it's about being 'optional.' When you have 25 times your annual expenses saved up, your work becomes a choice. You can decide to retire at 40, start a charity at 45, or switch to a low-stress job without worrying about the bill. It's a journey toward total autonomy. The faster you start, the sooner you reach this 'Magic Island' of independence.", icon: "🔥" },
            { type: 'content', title: "SWP (Withdrawal)", text: "How to eat your wealth? Use Systematic Withdrawal Plan (SWP) in retirement. Keep corpus growing in MF, withdraw a fixed salary monthly. Better than keeping cash.<br><br>An SWP ensures you never run out of money. Instead of withdrawing all your wealth and keeping it in a low-interest bank account, you keep it in the market and only take out what you need for the month. This allows the remaining 'principal' to continue growing, often outlasting you. It is the most tax-efficient and scientifically proven way to fund a long, happy, and dignified retirement.", icon: "🏧" },
            { type: 'quiz', question: "What is the ultimate goal of Financial Freedom?", options: ["Buying a Yacht", "Control over your Time", "Status", "Hoarding Cash"], correct: 1, explanation: "Wealth is the ability to wake up and say 'I can do whatever I want today'." },

            // Set 6: Legacy (21-24)
            { type: 'content', title: "Legacy Planning", text: "Wealth is for two things: Enjoying your life and Helping others. Write a Will. Ensure your wealth passes smoothly to the next generation or charity.<br><br>Your financial journey doesn't end with you. By setting up proper nominations and a clear will, you ensure that your lifetime of hard work doesn't turn into a legal battle for your children. Plan for your legacy with the same care you used to build your portfolio. True success is leaving the world (and your family) in a better place than you found it. Make your wealth count for something bigger.", icon: "📜" },
            { type: 'content', title: "Philanthropy", text: "Giving brings more joy than spending. Once you have 'Enough', consider how your wealth can impact the world. That is the highest form of wealth.<br><br>There is a limit to how much a fancy watch or a luxury car can improve your life. But there is no limit to the joy of funding a student's education or a community hospital. Philanthropy is not just for billionaires; it's a mindset of abundance. By using your wealth to solve problems, you move from being a 'Consumer' to being a 'Contributer'. This is the ultimate peak of the financial mountain.", icon: "🤝" },
            { type: 'content', title: "The Journey", text: "Investing is a marathon, not a sprint. There will be hills (bull markets) and valleys (bear markets). Keep running. Your future self will thank you.<br><br>The days are long, but the decades are short. You will face moments of doubt when the market is red, and moments of greed when it is green. But if you remember the lessons from this simulator—inflation, compounding, safety, and behavior—you will reach the finish line. You've completed the training; now go and build the life you've always dreamed of. The market is ready for you.", icon: "🏃" },
            { type: 'quiz', question: "Investing is best described as a:", options: ["Sprint", "Marathon", "High Jump", "Boxing Match"], correct: 1, explanation: "It requires endurance and consistency over a long period, not bursts of speed." },

            // Final (25)
            { type: 'content', title: "The Graduate", text: "Congratulations! You have completed the Nivi Flight Simulator. You are no longer a novice. You are a Pilot of your financial destiny. Go fly.<br><br>You've navigated through the foundations, debunked the myths, explored your options, and secured your safety. This simulator was designed to give you the mental models to stay calm when real markets get stormy. Financial freedom is not a destination, but a state of mind achieved through knowledge and discipline. Welcome to the elite group of educated investors. Your journey has only just begun. Clear for takeoff!", icon: "🎓" }
        ]
    }
];

// --- MODULE TOPICS FOR POST-MODULE REVIEW ---
const moduleTopics = [
    // Module 0: Foundations
    ["Inflation and purchasing power erosion", "Real Return vs Nominal Return", "Compounding and the Rule of 72", "Asset Classes: Debt, Equity, and Gold", "The 50-30-20 Budgeting Rule", "SMART Financial Goals", "Good Debt vs Bad Debt", "Lifestyle Inflation", "Tax Drag on investments"],
    // Module 1: Mythbusters
    ["Stock Market myths vs reality", "FD safety illusion and real returns", "Gold as investment vs cultural tradition", "Insurance is not an investment", "Timing the market fallacy", "Penny stocks and operator traps", "Credit card debt compounding trap", "Savings Account money illusion", "Chit funds and unregulated schemes"],
    // Module 2: Investment Options
    ["Mutual Funds and how NAV works", "Index Funds vs Actively Managed Funds", "ETFs and how they trade", "PPF and NPS for retirement", "REITs for real estate exposure", "Direct vs Regular Mutual Fund plans", "SIP and Rupee Cost Averaging", "Step-Up SIP strategy", "Cryptocurrency risks and volatility", "Corporate Bonds and credit ratings"],
    // Module 3: Rights & Safety
    ["SEBI as the market regulator", "How CDSL/NSDL protect your shares", "Importance of Nomination in accounts", "Identifying Ponzi Schemes", "Pump and Dump scam mechanics", "OTP fraud and phishing attacks", "SEBI SCORES grievance portal", "Power of Attorney vs DDPI", "Social Engineering scam tactics"],
    // Module 4: The Long Game
    ["Historical market crash recovery patterns", "Volatility as the fee for equity returns", "Rupee Cost Averaging during crashes", "Loss Aversion cognitive bias", "Herd Mentality in markets", "Coffee Can long-term investing", "The 15-15-15 Rule for wealth creation", "FIRE Movement and financial independence", "Noise vs Signal in market news", "SWP for retirement withdrawals"]
];

// --- STATE MANAGEMENT ---
let state = {
    lang: 'en',
    behaviorScore: 0,
    moduleProgress: [0, 0, 0, 0, 0],
    completedQuizzes: [], // "mod-card"
    completedModules: [],
    simAwards: { decision: false, finish: false },
    simUnlocked: false,
    simCompleted: false,
    rewardClaimed: false,
    comfortTopic: null, // User's chosen analogy topic (e.g. 'Farming')
    tourCompleted: false, // Whether the guided tour has been shown
    user: null // { name, phone, email, yob }
};

const translations = {
    en: {
        "nav-dash": "Dashboard",
        "nav-profile": "Profile",
        "nav-lang": "Language",
        "reward-title": "Commitment Acknowledged",
        "reward-text": "You've taken your first step towards responsible investing. As a token of your discipline, we've awarded you 10 Behavioral Readiness points.",
        "reward-points": "+10 Points Added",
        "btn-proceed": "Proceed to Dashboard",
        "hero-title": "Invest with Clarity",
        "hero-subtitle": "NIVI is your personal flight simulator for the Indian markets.",
        "hero-cta": "Start Your Journey",
        "onboarding-title": "Welcome to NIVI",
        "onboarding-subtitle": "Let's personalize your learning experience.",
        "field-name": "Full Name",
        "field-email": "Email Address",
        "field-phone": "Phone Number (Optional)",
        "field-yob": "Year of Birth",
        "logout": "Logout",
        "btn-continue": "Continue to Dashboard",
        "dash-readiness": "Behavioral Readiness",
        "dash-learning": "Learning Path",
        "dash-flashback-title": "Relive the Market History",
        "dash-flashback-desc": "Build a portfolio and see how you would have survived 2024-2025.",
        "btn-launch": "Launch Flashback",
        "mod-foundations": "Foundations",
        "mod-mythbusters": "Mythbusters",
        "mod-options": "Investment Options",
        "mod-safety": "Rights & Safety",
        "mod-long-game": "The Long Game",
        "btn-start-learning": "Start Learning",
        "mod-foundations-desc": "Inflation, compounding, and real-world examples.",
        "mod-mythbusters-desc": "Debunking myths with data from SEBI and Market History.",
        "mod-options-desc": "PPF, Gold, Mutual Funds: The comparative guide.",
        "mod-safety-desc": "Regulators, Scams, and protecting your capital.",
        "mod-long-game-desc": "Learn About Staying in it for that long run.",
        "hi-hey": "नमस्ते!",
        "en-hey": "Hey!",
        "btn-start-sim": "Start Simulation",
        "nav-panic-room": "Panic Room Simulation",
        "sim-init": "Initializing Simulation...",
        "sim-context-title": "Simulation Context",
        "sim-context-desc": "Investing ₹5,000 monthly (SIP) into the Nifty 50 Index. Testing your psychology against historical market volatility.",
        "sim-total-return": "Total Invested",
        "sim-abort": "Abort Simulation",
        "hero-msg": "Before you invest real money, learn how you behave when things go wrong.",
        "landing-about": "The Concept",
        "landing-about-title": "What is Nivi?",
        "landing-about-desc": "Nivi is a platform that teaches you how to invest by testing your emotions. We use AI and past market crashes to show you what it really feels like to invest. Instead of just reading theory, you will learn how to stay calm and make smart choices in a safe space.",
        "landing-engine-title": "Test Your Nerves",
        "landing-engine-desc": "Experience real market crashes to see how you react before you risk your actual money.",
        "landing-trap": "The Trap",
        "landing-trap-title": "Why smart people lose money.",
        "landing-trap-desc": "It’s not about intelligence. It’s about emotional durability.",
        "mistake-panic-title": "Panic Selling",
        "mistake-panic-text": "Markets crash. You get scared. You sell at the bottom to 'save' what's left. You turn a temporary dip into a permanent loss.",
        "mistake-tips-title": "Chasing Tips",
        "mistake-tips-text": "'Buy this penny stock!' You follow the herd, buy high, and get stuck when the pumpers dump their shares.",
        "mistake-sip-title": "Stopping SIPs",
        "mistake-sip-text": "'The market is falling, let me pause my investments.' You miss the golden opportunity to buy cheap units.",
        "landing-community": "The Community",
        "landing-testimonial-title": "What our members say.",
        "landing-testimonial-desc": "Real people, real behavior, real insights.",
        "test-1-quote": "NIVI approaches investing through structured learning modules and myth-busting content rather than tips. The market simulations and crash scenarios focus on understanding emotional reactions during volatility.",
        "test-1-role": "BBA Student",
        "test-2-quote": "A trusted one stop resource for investment related information. The website content is concise, clear and easy to understand, highlighting the importance of long term investment over short term speculation",
        "test-2-role": "MBA Professor",
        "test-3-quote": "Nivi demonstrates a thoughtful and innovative approach by incorporating panic room and flashback trading to simulate real market behavior and emotional decision-making.",
        "test-3-role": "Business owner and former Goldman Sachs analyst",
        "onboarding-card-title": "Tell us a bit about yourself",
        "sim-result-title": "Simulation Summary",
        "sim-annualized": "Annualized (XIRR)",
        "sim-nifty-return": "Nifty 50 Return",
        "sim-final-val": "Final Portfolio Value",
        "sim-market-news": "Advanced Learning",
        "news-badge": "Market Update",
        "btn-continue-sim": "Continue",
        "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "news-ai-boom": "AI Boom Drives IT Sector",
        "news-ai-impact": "IT Sector +12%",
        "news-bank-crisis": "Banking Crisis Alert",
        "news-bank-impact": "NPA fears. Bank Nifty -8%. Sell or Hold?",
        "news-pharma-surge": "Pharma Export Surge",
        "news-pharma-impact": "Export boost. Pharma +10%",
        "news-midcap-crash": "Midcap Valuation Crash",
        "news-midcap-impact": "Valuation fears. Midcap -15%",
        "news-infra-push": "Infrastructure Push",
        "news-infra-impact": "Govt spending. Metals +18%",
        "btn-sell": "Sell",
        "btn-hold": "Hold",
        "err-date-range": "End date must be after Start date!",
        "sim-panic-title": "Market Crash",
        "sim-panic-subtitle": "COVID-19 Pandemic Declared",
        "sim-current-loss": "Current Loss",
        "sim-portfolio-down": "Portfolio down 30% in 3 weeks",
        "btn-sell-assets": "Sell Assets",
        "btn-stay-invested": "Stay Invested",
        "btn-start": "Start Your Journey",
        "btn-start-learning": "Start learning",
        "btn-back-dash": "Back to Dashboard",
        "placeholder-name": "John Doe",
        "placeholder-email": "john@example.com",
        "placeholder-phone": "9876543210",
        "placeholder-yob": "1995",
        "field-email-helper": "We only use this to save your progress. No spam, ever.",
        "field-yob-helper": "Used to personalize your simulation experience.",
        "consent-text": "I agree to the terms and allow Nivi to analyze my financial behavior data for educational feedback.",
        "onboarding-footer": "You can change these details later.",
        "hero-main-1": "The market is not your enemy.",
        "hero-main-2": "Your reactions are.",
        "hero-subtext": "Most people don’t lose money because of bad stocks. They lose it because of panic.",
        "hero-fact-1": "Based on SEBI Data",
        "hero-fact-2": "Real Historical Crashes",
        "hero-fact-3": "Pure Education, No Sales",
        "btn-edit-profile": "Edit Profile",
        "btn-reset-data": "Reset Account Data",
        "title-edit-details": "Edit Personal Details",
        "btn-save-changes": "Save Changes",
        "btn-cancel": "Cancel",
        "dna-title": "Investor DNA",
        "dna-knowledge": "Knowledge",
        "dna-panic": "Panic Control",
        "dna-behavior": "Behavior",
        "mod-news-desc": "Deeper theory and complex instruments. Coming Soon.",
        "hi-hey": "नमस्ते!",
        "en-hey": "Hey!",
        "nav-flashback": "Flashback Trading",
        "field-start-from": "Start From",
        "field-end-at": "End At",
        "total-portfolio": "Total Portfolio",
        "allocate-up-to": "Allocate up to ₹1,00,000",
        "btn-autofill": "Auto-Fill",
        "btn-reset": "Reset",
        "btn-start-sim-long": "Start Simulation",
        "sector-nifty": "Nifty 50 Index",
        "sector-bank": "Bank Nifty Index",
        "sector-it": "IT Sector Index",
        "sector-auto": "Auto Sector Index",
        "sector-fmcg": "FMCG Index",
        "sector-pharma": "Pharma Index",
        "sector-metal": "Metal Index",
        "sector-midcap": "Midcap Index",
        "sector-smallcap": "Smallcap Index",
        "sector-fin": "Financial Serv. Index",
        "nav-index": "Index",
        "sim-current-date": "Current Date",
        "your-portfolio": "Your Portfolio",
        "your-final-value": "Your Final Value",
        "nifty-benchmark": "Nifty 50 Benchmark",
        "simulation-complete": "Simulation Complete",
        "chatbot-placeholder": "Ask me anything...",
        "chatbot-welcome": "Hello! I am NIVI, your behavioral investing assistant. How can I help you today? 💬",
        "chatbot-prelogin": "I can explain the curriculum of NIVI. You will learn about: 1. Financial Foundations, 2. Mythbusters, 3. Investment Options, 4. Rights & Safety, and 5. The Long Game (Panic Simulation).",
        "chatbot-source-sebi": "The educational content in our modules is based on guidelines and data from SEBI (Securities and Exchange Board of India). You can verify more on their official website: https://www.sebi.gov.in/",
        "chatbot-source-nse": "The historical market data used in our Flashback Trading and Panic Room simulations is sourced from the National Stock Exchange (NSE). You can explore their data archives here: https://www.nseindia.com/",
        "google-signin-desc": "Please sign in to save your progress and continue learning.",
        "btn-google-signin": "Sign in with Google"
    },
    hi: {
        "nav-dash": "डैशबोर्ड",
        "nav-profile": "प्रोफ़ाइल",
        "nav-lang": "भाषा",
        "reward-title": "प्रतिबद्धता स्वीकार की गई",
        "reward-text": "आपने जिम्मेदार निवेश की ओर अपना पहला कदम उठाया है। आपके अनुशासन के प्रतीक के रूप में, हमने आपको 10 व्यवहारात्मक तत्परता अंक दिए हैं।",
        "reward-points": "+10 अंक जोड़े गए",
        "btn-proceed": "डैशबोर्ड पर आगे बढ़ें",
        "hero-title": "स्पष्टता के साथ निवेश करें",
        "hero-subtitle": "NIVI भारतीय बाजारों के लिए आपका व्यक्तिगत फ्लाइट सिम्युलेटर है।",
        "hero-cta": "अपनी यात्रा शुरू करें",
        "onboarding-title": "NIVI में आपका स्वागत है",
        "onboarding-subtitle": "आइए आपके सीखने के अनुभव को व्यक्तिगत बनाएं।",
        "field-name": "पूरा नाम",
        "field-email": "ईमेल पता",
        "field-phone": "फ़ोन नंबर (वैकल्पिक)",
        "field-yob": "जन्म का वर्ष",
        "btn-continue": "डैशबोर्ड पर जारी रखें",
        "dash-readiness": "व्यवहारात्मक तत्परता",
        "dash-learning": "सीखने का मार्ग",
        "dash-new-sim": "नया सिमुलेशन",
        "dash-flashback-title": "बाजार के इतिहास को फिर से जिएं",
        "dash-flashback-desc": "एक पोर्टफोलियो बनाएं और देखें कि आप 2024-2025 में कैसे बचते।",
        "btn-launch": "फ़्लैशबैक लॉन्च करें",
        "mod-foundations": "बुनियाद",
        "mod-mythbusters": "मिथक तोड़ने वाले",
        "mod-options": "निवेश के विकल्प",
        "mod-safety": "अधिकार और सुरक्षा",
        "mod-long-game": "लंबा खेल",
        "mod-foundations-desc": "मुद्रास्फीति, चक्रवृद्धि, और वास्तविक दुनिया के उदाहरण।",
        "mod-mythbusters-desc": "SEBI और बाजार इतिहास के डेटा के साथ मिथकों को उजागर करना।",
        "mod-options-desc": "PPF, सोना, म्यूचुअल फंड: तुलनात्मक मार्गदर्शिका।",
        "mod-safety-desc": "नियामक, घोटाले, और आपकी पूंजी की रक्षा।",
        "mod-long-game-desc": "लंबे समय तक इसमें बने रहने के बारे में जानें।",
        "btn-start-learning": "सीखना शुरू करें",
        "btn-start-sim": "सिमुलेशन शुरू करें",
        "nav-panic-room": "पैनिक रूम सिमुलेशन",
        "sim-init": "सिमुलेशन प्रारंभ हो रहा है...",
        "sim-context-title": "सिमुलेशन संदर्भ",
        "sim-context-desc": "निफ्टी 50 इंडेक्स में ₹5,000 मासिक (SIP) निवेश करना। ऐतिहासिक बाजार अस्थिरता के खिलाफ आपके मनोविज्ञान का परीक्षण करना।",
        "sim-total-return": "कुल निवेशित",
        "sim-abort": "सिमुलेशन छोड़ें",
        "hero-msg": "इससे पहले कि आप असली पैसा निवेश करें, जानें कि जब चीजें खराब होती हैं तो आप कैसा व्यवहार करते हैं।",
        "landing-about": "अवधारणा",
        "landing-about-title": "Nivi क्या है?",
        "landing-about-desc": "Nivi एक ऐसा मंच है जो आपकी भावनाओं का परीक्षण करके आपको निवेश करना सिखाता है। हम आपको यह दिखाने के लिए AI और पिछली बाजार दुर्घटनाओं का उपयोग करते हैं कि निवेश करना वास्तव में कैसा लगता है। केवल सिद्धांत पढ़ने के बजाय, आप सीखेंगे कि कैसे शांत रहें और सुरक्षित स्थान पर स्मार्ट विकल्प चुनें।",
        "landing-engine-title": "अपनी भावनाओं का परीक्षण करें",
        "landing-engine-desc": "अपने असली पैसे को जोखिम में डालने से पहले वास्तविक बाजार दुर्घटनाओं का अनुभव करें कि आप कैसे प्रतिक्रिया देते हैं।",
        "landing-trap": "जाल",
        "landing-trap-title": "स्मार्ट लोग पैसा क्यों खोते हैं।",
        "landing-trap-desc": "यह बुद्धिमत्ता के बारे में नहीं है। यह भावनात्मक टिकाऊपन के बारे में है।",
        "mistake-panic-title": "घबराहट में बेचना",
        "mistake-panic-text": "बाजार धराशायी हो जाते हैं। आप डर जाते हैं। आप बचे हुए को 'बचाने' के लिए नीचे बेच देते हैं। आप एक अस्थायी गिरावट को स्थायी नुकसान में बदल देते हैं।",
        "mistake-tips-title": "टिप्स के पीछे भागना",
        "mistake-tips-text": "'इस पेनी स्टॉक को खरीदें!' आप झुंड का अनुसरण करते हैं, उच्च स्तर पर खरीदते हैं, और पंपर्स द्वारा अपने शेयर डंप करने पर फंस जाते हैं।",
        "mistake-sip-title": "SIP रोकना",
        "mistake-sip-text": "'बाजार गिर रहा है, मुझे अपने निवेश को रोकने दें।' आप सस्ते यूनिट्स खरीदने का सुनहरा अवसर खो देते हैं।",
        "landing-community": "समुदाय",
        "landing-testimonial-title": "हमारे सदस्य क्या कहते हैं।",
        "landing-testimonial-desc": "असली लोग, असली व्यवहार, असली परिणाम।",
        "test-1-quote": "NIVI निवेश को सुझावों के बजाय संरचित शिक्षण मॉड्यूल और मिथक-भंजक सामग्री के माध्यम से देखता है। बाजार सिमुलेशन और क्रैश परिदृश्य अस्थिरता के दौरान भावनात्मक प्रतिक्रियाओं को समझने पर ध्यान केंद्रित करते हैं।",
        "test-1-role": "बीबीए छात्र, क्राइस्ट यूनिवर्सिटी",
        "test-2-quote": "निवेश संबंधी जानकारी के लिए एक विश्वसनीय वन-स्टॉप संसाधन। वेबसाइट की सामग्री संक्षिप्त, स्पष्ट और समझने में आसान है, जो अल्पकालिक सट्टेबाजी के बजाय दीर्घकालिक निवेश के महत्व को उजागर करती है।",
        "test-2-role": "एमबीए प्रोफेसर, बीएनएमआईटी",
        "test-3-quote": "Nivi ने पैनिक रूम और फ्लैशबैक ट्रेडिंग को शामिल करके एक विचारशील और अभिनव दृष्टिकोण प्रदर्शित किया है जो वास्तविक बाजार व्यवहार और भावनात्मक निर्णय लेने की नकल करता है। यह व्यावहारिक तरीके से ट्रेडिंग मनोविज्ञान और जोखिम प्रबंधन के बारे में जागरूकता बनाता है।",
        "test-3-role": "व्यवसाय स्वामी और पूर्व गोल्डमैन सैक्स विश्लेषक",
        "onboarding-card-title": "हमें अपने बारे में थोड़ा बताएं",
        "logout": "लॉगआउट",
        "hi-hey": "नमस्ते!",
        "en-hey": "Hey!",
        "nav-flashback": "फ़्लैशबैक ट्रेडिंग",
        "field-start-from": "से शुरू करें",
        "field-end-at": "पर समाप्त करें",
        "total-portfolio": "कुल पोर्टफोलियो",
        "allocate-up-to": "₹1,00,000 तक आवंटित करें",
        "btn-autofill": "ऑटो-फिल",
        "btn-reset": "रीसेट करें",
        "btn-start-sim-long": "सिमुलेशन शुरू करें",
        "ready-start": "शुरू करने के लिए तैयार",
        "sim-result-title": "सिमुलेशन सारांश",
        "sim-total-return": "कुल निवेशित",
        "sim-annualized": "वार्षिकीकृत (XIRR)",
        "sim-nifty-return": "निफ्टी 50 रिटर्न",
        "sim-final-val": "अंतिम पोर्टफोलियो मूल्य",
        "sim-market-news": "उन्नत शिक्षण (Advanced Learning)",
        "news-badge": "बाजार अपडेट",
        "btn-continue-sim": "जारी रखें",
        "months": ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
        "news-ai-boom": "AI बूम ने IT सेक्टर को आगे बढ़ाया",
        "news-ai-impact": "IT सेक्टर +12%",
        "news-bank-crisis": "बैंकिंग संकट अलर्ट",
        "news-bank-impact": "NPA का डर। बैंक निफ्टी -8%। बेचें या होल्ड करें?",
        "news-pharma-surge": "फार्मा निर्यात में उछाल",
        "news-pharma-impact": "निर्यात में बढ़ोतरी। फार्मा +10%",
        "news-midcap-crash": "मिडकैप वैल्यूएशन क्रैश",
        "news-midcap-impact": "वैल्यूएशन का डर। मिडकैप -15%",
        "news-infra-push": "बुनियादी ढांचे को बढ़ावा",
        "news-infra-impact": "सरकारी खर्च। मेटल +18%",
        "btn-sell": "बेचें",
        "btn-hold": "होल्ड करें",
        "err-date-range": "अंतिम तिथि आरंभ तिथि के बाद होनी चाहिए!",
        "sim-panic-title": "बाजार क्रैश",
        "sim-panic-subtitle": "COVID-19 महामारी घोषित",
        "sim-current-loss": "वर्तमान हानि",
        "sim-portfolio-down": "3 सप्ताह में पोर्टफोलियो 30% नीचे",
        "btn-sell-assets": "संपत्ति बेचें",
        "btn-stay-invested": "निवेशित रहें",
        "btn-start": "अपनी यात्रा शुरू करें",
        "btn-start-learning": "सीखना शुरू करें",
        "placeholder-name": "जॉन डो (John Doe)",
        "placeholder-email": "john@example.com",
        "placeholder-phone": "9876543210",
        "placeholder-yob": "1995",
        "field-email-helper": "हम इसका उपयोग केवल आपकी प्रगति को बचाने के लिए करते हैं। कोई स्पैम नहीं, कभी नहीं।",
        "field-yob-helper": "आपके सिमुलेशन अनुभव को व्यक्तिगत बनाने के लिए उपयोग किया जाता है।",
        "consent-text": "मैं शर्तों से सहमत हूं और निवि को शैक्षिक प्रतिक्रिया के लिए मेरे वित्तीय व्यवहार डेटा का विश्लेषण करने की अनुमति देता हूं।",
        "onboarding-footer": "आप इन विवरणों को बाद में बदल सकते हैं।",
        "btn-back-dash": "डैशबोर्ड पर वापस",
        "sector-nifty": "निफ्टी 50 इंडेक्स",
        "sector-bank": "बैंक निफ्टी इंडेक्स",
        "sector-it": "आईटी सेक्टर इंडेक्स",
        "sector-auto": "ऑटो सेक्टर इंडेक्स",
        "sector-fmcg": "एफएमसीजी इंडेक्स",
        "hero-main-1": "बाजार आपका दुश्मन नहीं है।",
        "hero-main-2": "आपकी प्रतिक्रियाएं हैं।",
        "hero-subtext": "ज्यादातर लोग खराब स्टॉक की वजह से पैसा नहीं खोते हैं। वे घबराहट की वजह से इसे खो देते हैं।",
        "hero-fact-1": "SEBI डेटा पर आधारित",
        "hero-fact-2": "वास्तविक ऐतिहासिक क्रैश",
        "hero-fact-3": "शुद्ध शिक्षा, कोई बिक्री नहीं",
        "btn-edit-profile": "प्रोफ़ाइल संपादित करें",
        "btn-reset-data": "खाता डेटा रीसेट करें",
        "title-edit-details": "व्यक्तिगत विवरण संपादित करें",
        "btn-save-changes": "परिवर्तन सहेजें",
        "btn-cancel": "रद्द करें",
        "dna-title": "निवेशक डीएनए",
        "dna-knowledge": "ज्ञान",
        "dna-panic": "पैनिक नियंत्रण",
        "dna-behavior": "व्यवहार",
        "mod-news-desc": "गहरी थ्योरी और जटिल उपकरण। जल्द आ रहा है।",
        "sector-pharma": "फार्मा इंडेक्स",
        "sector-metal": "मेटल इंडेक्स",
        "sector-midcap": "मिडकैप इंडेक्स",
        "sector-smallcap": "स्मॉलकैप इंडेक्स",
        "sector-fin": "वित्तीय सेवाएं इंडेक्स",
        "nav-index": "इंडेक्स",
        "sim-current-date": "वर्तमान तिथि",
        "your-portfolio": "आपका पोर्टफोलियो",
        "your-final-value": "आपका अंतिम मूल्य",
        "nifty-benchmark": "निफ्टी 50 बेंचमार्क",
        "simulation-complete": "सिमुलेशन पूर्ण",
        "chatbot-placeholder": "मुझसे कुछ भी पूछें...",
        "chatbot-welcome": "नमस्ते! मैं NIVI हूँ, आपकी व्यवहारात्मक निवेश सहायक। मैं आज आपकी कैसे मदद कर सकती हूँ? 💬",
        "chatbot-prelogin": "मैं NIVI के पाठ्यक्रम के बारे में बता सकती हूँ। आप सीखेंगे: 1. वित्तीय आधार, 2. मिथक तोड़ने वाले, 3. निवेश के विकल्प, 4. अधिकार और सुरक्षा, और 5. लंबा खेल (पैनिक सिमुलेशन)।",
        "chatbot-source-sebi": "हमारे मॉड्यूल की शैक्षिक सामग्री SEBI (भारतीय प्रतिभूति और विनिमय बोर्ड) के दिशानिर्देशों और डेटा पर आधारित है। आप उनकी आधिकारिक वेबसाइट पर अधिक सत्यापित कर सकते हैं: https://www.sebi.gov.in/",
        "chatbot-source-nse": "हमारे फ्लैशबैक ट्रेडिंग और पैनिक रूम सिमुलेशन में उपयोग किया गया ऐतिहासिक बाजार डेटा नेशनल स्टॉक एक्सचेंज (NSE) से लिया गया है। आप यहां उनके डेटा आर्काइव देख सकते हैं: https://www.nseindia.com/",
        "google-signin-desc": "अपनी प्रगति को सहेजने और सीखना जारी रखने के लिए कृपया साइन इन करें।",
        "btn-google-signin": "Google के साथ साइन इन करें"
    }
};

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,bn,kn,te',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

const i18n = {
    tDynamic: async (text, targetLang) => {
        if (!text || text.trim() === "" || targetLang === 'en') return text;
        try {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
            const resp = await fetch(url);
            const data = await resp.json();
            return data[0].map(x => x[0]).join('');
        } catch (e) {
            console.error("Translation error:", e);
            return text;
        }
    },

    setLanguage: async (lang) => {
        state.lang = lang;
        const isManual = translations[lang];

        // Update body class for language-specific styling
        document.body.className = `lang-${lang}`;

        // Instant UI feedback for buttons (no delay)
        app.updateHeader();

        const elements = document.querySelectorAll('[data-i18n]');
        for (const el of elements) {
            const key = el.getAttribute('data-i18n');

            // Priority 1: Manual Translation (EN/HI)
            if (isManual && translations[lang][key]) {
                const val = translations[lang][key];
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = val;
                } else {
                    el.innerText = val;
                }
            }
            // Priority 2: Dynamic Translation (BN, KN, TE or missing keys)
            else if (lang !== 'en') {
                // Use English as base for translation
                const baseText = translations['en'][key] || el.innerText;
                const translated = await i18n.tDynamic(baseText, lang);
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translated;
                } else {
                    el.innerText = translated;
                }
            }
            // Fallback to English
            else {
                const val = translations['en'][key] || key;
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = val;
                } else {
                    el.innerText = val;
                }
            }
        }

        storage.save();
        app.updateHeader();
        app.updateDash();
    },
    t: (key) => {
        const lang = state.lang || 'en';
        return (translations[lang] && translations[lang][key]) ? translations[lang][key] : (translations['en'][key] || key);
    },
    tMonth: (monthIdx) => {
        const lang = state.lang || 'en';
        return (translations[lang] && translations[lang].months) ? translations[lang].months[monthIdx] : translations['en'].months[monthIdx];
    }
};

/* ===== CIRCULAR LANGUAGE SELECTOR JS ===== */
const langSelector = {
    languages: [
        { code: 'en', name: 'English', abbr: 'EN' },
        { code: 'hi', name: 'Hindi', abbr: 'हि' },
        { code: 'bn', name: 'Bengali', abbr: 'বা' },
        { code: 'mr', name: 'Marathi', abbr: 'म' },
        { code: 'te', name: 'Telugu', abbr: 'తె' },
        { code: 'ta', name: 'Tamil', abbr: 'த' },
        { code: 'gu', name: 'Gujarati', abbr: 'ગુ' },
        { code: 'ur', name: 'Urdu', abbr: 'ار' },
        { code: 'kn', name: 'Kannada', abbr: 'ಕ' },
        { code: 'or', name: 'Odia', abbr: 'ଓ' },
        { code: 'ml', name: 'Malayalam', abbr: 'മ' },
        { code: 'pa', name: 'Punjabi', abbr: 'ਪੰ' },
        { code: 'as', name: 'Assamese', abbr: 'অ' },
        { code: 'mai', name: 'Maithili', abbr: 'मै' },
        { code: 'sat', name: 'Santali', abbr: 'ᱥᱟ' },
        { code: 'ks', name: 'Kashmiri', abbr: 'कश' },
        { code: 'ne', name: 'Nepali', abbr: 'ने' },
        { code: 'sd', name: 'Sindhi', abbr: 'سن' },
        { code: 'doi', name: 'Dogri', abbr: 'डो' },
        { code: 'kok', name: 'Konkani', abbr: 'कों' },
        { code: 'kru', name: 'Kurukh', abbr: 'कु' },
        { code: 'mni', name: 'Manipuri', abbr: 'মৈ' }
    ],

    select: function (code) {
        this.render(code);
        i18n.setLanguage(code);
    },

    render: function (selectedCode) {
        const sel = selectedCode || state.lang || 'en';
        const size = 220;
        const cx = size / 2;
        const cy = size / 2;

        const selectedLang = this.languages.find(l => l.code === sel);
        const ringLangs = this.languages.filter(l => l.code !== sel);

        // Split into two rings: inner 10, outer 11
        const ring1 = ringLangs.slice(0, 10);
        const ring2 = ringLangs.slice(10);

        // Radii for two concentric rings
        const r1Inner = 42, r1Outer = 68;   // inner ring
        const r2Inner = 70, r2Outer = 100;   // outer ring
        const centerR = 36;

        const polar = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
        const gap = 0.03;

        // Helper: draw one ring of segments
        const drawRing = (langs, rIn, rOut, fontSize) => {
            let s = '';
            const n = langs.length;
            const slice = (2 * Math.PI) / n;
            langs.forEach((l, i) => {
                const a1 = -Math.PI / 2 + i * slice + gap / 2;
                const a2 = -Math.PI / 2 + (i + 1) * slice - gap / 2;
                const big = (a2 - a1) > Math.PI ? 1 : 0;
                const [x1i, y1i] = polar(rIn, a1);
                const [x1o, y1o] = polar(rOut, a1);
                const [x2i, y2i] = polar(rIn, a2);
                const [x2o, y2o] = polar(rOut, a2);
                const d = `M ${x1i} ${y1i} L ${x1o} ${y1o} A ${rOut} ${rOut} 0 ${big} 1 ${x2o} ${y2o} L ${x2i} ${y2i} A ${rIn} ${rIn} 0 ${big} 0 ${x1i} ${y1i} Z`;
                const [tx, ty] = polar((rIn + rOut) / 2, (a1 + a2) / 2);
                s += `<g class="lang-segment" onclick="langSelector.select('${l.code}')">
                            <path d="${d}" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.8"><title>${l.name}</title></path>
                            <text class="lang-seg-text" x="${tx}" y="${ty}" text-anchor="middle" dominant-baseline="central" font-size="${fontSize}">${l.abbr}</text>
                        </g>`;
            });
            return s;
        };

        let svg = `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`;

        // Outer ring (hidden, revealed on hover)
        svg += `<g class="lang-outer-ring">`;
        svg += `<circle cx="${cx}" cy="${cy}" r="${r2Outer + 3}" fill="none" stroke="#f1f5f9" stroke-width="1"/>`;
        svg += drawRing(ring2, r2Inner, r2Outer, 13);
        svg += `<circle cx="${cx}" cy="${cy}" r="${r2Inner}" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>`;
        svg += `</g>`;

        // Inner ring (10 segments)
        svg += drawRing(ring1, r1Inner, r1Outer, 14);

        // Border between inner ring and center
        svg += `<circle cx="${cx}" cy="${cy}" r="${r1Inner}" fill="none" stroke="#e2e8f0" stroke-width="1"/>`;

        // Center circle
        const buildCenter = (gid) => {
            let c = '';
            // Neutral Gradient (White to Light Gray)
            c += `<defs><linearGradient id="${gid}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#f1f5f9"/>
                    </linearGradient></defs>`;
            // Circle with neutral fill and subtle border stroke
            c += `<circle cx="${cx}" cy="${cy}" r="${centerR}" fill="url(#${gid})" stroke="#e2e8f0" stroke-width="1"/>`;
            // Text colors changed to Dark Gray/Black for contrast
            c += `<text x="${cx}" y="${cy - 5}" text-anchor="middle" dominant-baseline="central"
                        fill="#1e293b" font-size="26" font-weight="800" font-family="Inter,sans-serif">${selectedLang.abbr}</text>`;
            c += `<text x="${cx}" y="${cy + 14}" text-anchor="middle" dominant-baseline="central"
                        fill="#64748b" font-size="9" font-weight="600" font-family="Inter,sans-serif">${selectedLang.name}</text>`;
            return c;
        };

        // Render into both landing and dashboard containers with unique gradient IDs
        const containers = [
            document.getElementById('lang-circle'),
            document.getElementById('lang-circle-dash')
        ];
        containers.forEach((el, idx) => {
            if (!el) return;
            el.innerHTML = svg + buildCenter('cg-' + idx) + '</svg>';
        });
    }
};

/**
 * announce(msg, politeness)
 * Pushes a message to the appropriate aria-live region so screen readers
 * will announce it. Use 'polite' for normal updates, 'assertive' for urgent
 * feedback (e.g. quiz answer results).
 */
function announce(msg, politeness = 'polite') {
    const id = politeness === 'assertive' ? 'a11y-alert' : 'a11y-announcer';
    const el = document.getElementById(id);
    if (!el) return;
    // Temporarily clear and reset to force re-announcement even for same text
    el.textContent = '';
    requestAnimationFrame(() => { el.textContent = msg; });
}
window.announce = announce; // Expose globally for inline handlers if needed

const chatbot = {
    // --- POST-MODULE REVIEW STATE ---
    reviewState: {
        active: false,
        moduleIndex: -1,
        questions: [],
        currentQuestion: 0,
        answers: [],
        evaluations: []
    },

    toggle: () => {
        const win = document.getElementById('chatbot-window');
        win.classList.toggle('hidden');
        if (!win.classList.contains('hidden')) {
            if (document.getElementById('chatbot-messages').children.length === 0) {
                chatbot.appendMessage('bot', i18n.t('chatbot-welcome'));
            }
            setTimeout(() => document.getElementById('chatbot-input').focus(), 100);
        }
    },
    init: () => {
        const input = document.getElementById('chatbot-input');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') chatbot.send();
            });
        }
    },
    appendMessage: (sender, text) => {
        const container = document.getElementById('chatbot-messages');
        const msg = document.createElement('div');
        msg.className = `chat-msg ${sender}`;
        msg.innerHTML = text;
        container.appendChild(msg);
        container.scrollTop = container.scrollHeight;
    },

    // --- GROQ API INTEGRATION ---
    GROQ_API_KEY_TOPIC: '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', // Key for Comfort Topics
    GROQ_API_KEY_CHATBOT: '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', // Key for Debate Chatbot

    callGroq: async (messages, apiTarget) => {
        const apiKey = apiTarget === 'TOPIC' ? chatbot.GROQ_API_KEY_TOPIC : chatbot.GROQ_API_KEY_CHATBOT;
        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: messages,
                    temperature: 0.9,
                    max_tokens: 600
                })
            });
            if (!response.ok) throw new Error(`Groq API error: ${response.status}`);
            const data = await response.json();
            let text = data.choices[0].message.content;

            // Translate on the fly if the user's language is not English
            if (state.lang !== 'en') {
                text = await i18n.tDynamic(text, state.lang);
            }

            return text;
        } catch (err) {
            console.error('Local API proxy call failed:', err);
            return null;
        }
    },

    // --- START MODULE DEBATE ---
    startReview: async (moduleIndex) => {
        const modTitle = modules[moduleIndex].title;
        const topics = moduleTopics[moduleIndex];
        if (!topics || topics.length === 0) return;

        // Pick ONE topic for debate
        const topic = topics[Math.floor(Math.random() * topics.length)];
        const seed = Date.now();
        const userName = state.user ? state.user.name : 'Challenger';

        // Reset review state for DEBATE
        chatbot.reviewState = {
            active: true,
            mode: 'debate',
            moduleIndex: moduleIndex,
            topic: topic,
            turnCount: 0,
            history: []
        };

        // Open chatbot window
        const win = document.getElementById('chatbot-window');
        win.classList.remove('hidden');

        // Show Debate Intro
        let introMsg = `🥊 <strong>Debate Session: ${modTitle}</strong><br><br>Welcome to the arena, ${userName}! I will take a <strong>controversial stance</strong> on "${topic}". Your job is to prove me wrong and defend the correct financial principle.<br><br><em>Ready? Let's see if you can outsmart me!</em>`;
        if (state.lang !== 'en') introMsg = await i18n.tDynamic(introMsg, state.lang);
        chatbot.appendMessage('bot', introMsg);

        // Delay 1
        await new Promise(r => setTimeout(r, 3000));

        // Generate controversial stance via Groq
        chatbot.appendMessage('bot', '⏳ Formulating a controversial opinion...');

        const prompt = `You are a beginner investor having a friendly chat.
Topic: "${topic}"

Generate a very simple, slightly incorrect opinion about this topic that is easy for a student to correct.
Avoid complex words. Make the mistake very obvious (e.g. "I should spend all my money today because the future doesn't matter" or "I will keep my money in a box to make it double").

Keep it under 2 sentences. Use very easy English.`;

        let stance = await chatbot.callGroq([
            { role: 'system', content: 'You are a friendly person with a very simple, incorrect financial idea.' },
            { role: 'user', content: prompt }
        ], chatbot.GROQ_API_KEY_CHATBOT);

        // Remove loading
        const msgs = document.getElementById('chatbot-messages');
        if (msgs.lastChild && msgs.lastChild.innerText.includes('Formulating')) msgs.lastChild.remove();

        if (!stance) {
            console.warn("Backend down, using fallback stance.");
            stance = "I think putting all my savings in a jar under my bed is the best way to invest because I can see it!";
            if (state.lang !== 'en') stance = await i18n.tDynamic(stance, state.lang);
        }

        chatbot.reviewState.stance = stance;
        chatbot.reviewState.history.push({ role: 'assistant', content: stance });

        // Delay 2 (before showing position)
        await new Promise(r => setTimeout(r, 3000));

        let myPositionMsg = `🗣️ <strong>My Position:</strong><br><br>"${stance}"<br><br>👉 <em>Go ahead, prove me wrong!</em>`;
        if (state.lang !== 'en') myPositionMsg = await i18n.tDynamic(myPositionMsg, state.lang);
        chatbot.appendMessage('bot', myPositionMsg);

        // Add skip button AFTER position
        chatbot.appendSkipButton();

        setTimeout(() => document.getElementById('chatbot-input').focus(), 200);
    },

    // --- HANDLE DEBATE TURN ---
    evaluateAnswer: async (userInput) => {
        const rs = chatbot.reviewState;

        // If not in debate mode (legacy safety), fallback to old or just return
        if (rs.mode !== 'debate') return;

        rs.history.push({ role: 'user', content: userInput });
        rs.turnCount++;

        chatbot.appendMessage('bot', '🤔 Thinking...');

        // Start a minimum delay timer
        const delayPromise = new Promise(r => setTimeout(r, 3000));

        // Turn 1: Bot Rebuts
        if (rs.turnCount < 2) {
            const rebuttalPrompt = `You are talking to a student about "${rs.topic}".
Your Position: "${rs.stance}"
Student's Argument: "${userInput}"

Agree with them partially but stick to your simple, wrong idea using very basic words. 
Don't be stubborn. Be easy to convince. Use simple vocabulary so a school child can understand you.
Keep it under 30 words.`;

            // Run API and Delay in parallel
            let [rebuttal] = await Promise.all([
                chatbot.callGroq([
                    { role: 'system', content: 'You are a friendly person with a simple, wrong financial view. Use very easy words.' },
                    { role: 'user', content: rebuttalPrompt }
                ], chatbot.GROQ_API_KEY_CHATBOT),
                delayPromise
            ]);

            if (!rebuttal) {
                console.warn("Backend down, using fallback rebuttal.");
                rebuttal = "That's an interesting point, but my way just feels simpler and safer to me right now.";
                if (state.lang !== 'en') rebuttal = await i18n.tDynamic(rebuttal, state.lang);
            }

            const msgs = document.getElementById('chatbot-messages');
            if (msgs.lastChild && msgs.lastChild.innerText.includes('Thinking')) msgs.lastChild.remove();

            chatbot.appendMessage('bot', rebuttal || "Is that all you've got? Dig deeper!");
            rs.history.push({ role: 'assistant', content: rebuttal });

            setTimeout(() => document.getElementById('chatbot-input').focus(), 500);

        } else {
            // Turn 2+: Evaluate and Conclude
            chatbot.concludeDebate();
        }
    },

    // --- CONCLUDE DEBATE ---
    concludeDebate: async () => {
        const rs = chatbot.reviewState;

        // Start a minimum delay timer (if not coming from evaluateAnswer directly/redundantly, but here we cover the processing time)
        // Note: concludeDebate is called from evaluateAnswer. evaluateAnswer already waited 3s for "Thinking"? 
        // No, evaluateAnswer calls concludeDebate in the else block. It doesn't wait there. 
        // So we need "Thinking" and delay here too.

        chatbot.appendMessage('bot', '🤔 Analyzing your argument...');
        const delayPromise = new Promise(r => setTimeout(r, 3000));

        const evalPrompt = `Judge this debate on "${rs.topic}".
Bot's Opinion: "${rs.stance}"
Student's Words:
${rs.history.filter(m => m.role === 'user').map(m => `- ${m.content}`).join('\n')}

Did the student explain why I was wrong? 
Be very kind and generous. Give more stars easily.
Use very simple words in your feedback.

Format:
STARS: [number 1-5]
FEEDBACK: [very simple text]
PRINCIPLE: [very simple summary of the correct rule]`;

        const [evaluation] = await Promise.all([
            chatbot.callGroq([
                { role: 'system', content: 'You are a very kind judge. Use very simple vocabulary and be extra generous.' },
                { role: 'user', content: evalPrompt }
            ], chatbot.GROQ_API_KEY_CHATBOT),
            delayPromise
        ]);

        const msgs = document.getElementById('chatbot-messages');
        // Remove last "Analyzing..." or "Thinking..." message
        if (msgs.lastChild && (msgs.lastChild.innerText.includes('Thinking') || msgs.lastChild.innerText.includes('Analyzing'))) msgs.lastChild.remove();

        // Parse evaluation
        let stars = 3;
        let feedback = "Good effort!";
        let principle = "Always stick to the basics.";

        if (evaluation) {
            const starMatch = evaluation.match(/STARS:\s*(\d)/);
            if (starMatch) stars = parseInt(starMatch[1]);

            const fbMatch = evaluation.match(/FEEDBACK:\s*(.*)/);
            if (fbMatch) feedback = fbMatch[1];

            const princMatch = evaluation.match(/PRINCIPLE:\s*(.*)/);
            if (princMatch) principle = princMatch[1];

            // Cleanup if regex failed but we have text
            if (!starMatch && !fbMatch) feedback = evaluation;
        } else {
            console.warn("Backend down, using fallback evaluation.");
            stars = 4;
            feedback = "Great points! You explained why my idea was risky and what the proper approach is.";
            principle = "Proper investing builds long-term wealth, while hiding cash loses value to inflation.";
            if (state.lang !== 'en') {
                feedback = await i18n.tDynamic(feedback, state.lang);
                principle = await i18n.tDynamic(principle, state.lang);
            }
        }

        // Award points
        const points = stars;
        state.behaviorScore += points;
        storage.save();

        let summaryHTML = `🏁 <strong>Debate Over!</strong><br><br>`;
        summaryHTML += `<strong>Score:</strong> ${'⭐'.repeat(stars)}<br>`;
        summaryHTML += `<strong>Verdict:</strong> ${feedback}<br><br>`;
        summaryHTML += `📚 <strong>Correct Principle:</strong><br>${principle}<br><br>`;
        summaryHTML += `<em>You earned +${points} Behavioral Points!</em>`;
        if (state.lang !== 'en') summaryHTML = await i18n.tDynamic(summaryHTML, state.lang);

        chatbot.appendMessage('bot', summaryHTML);

        // End Session
        chatbot.reviewState.active = false;
        setTimeout(() => app.showDashboard(), 5000);
    },

    // --- SKIP BUTTON ---
    appendSkipButton: () => {
        const container = document.getElementById('chatbot-messages');
        const skipDiv = document.createElement('div');
        // Add unique ID to skip button container to avoid duplicates or removal issues
        skipDiv.id = "skip-btn-container";
        skipDiv.className = 'chat-msg bot';
        skipDiv.innerHTML = `<button onclick="chatbot.skipReview()" style="background:var(--bg-card);border:1px solid var(--border);color:var(--text-muted);padding:6px 16px;border-radius:8px;cursor:pointer;font-size:0.85rem;transition:all 0.2s;">⏭️ Skip Review</button>`;
        container.appendChild(skipDiv);
        container.scrollTop = container.scrollHeight;
    },

    skipReview: () => {
        chatbot.reviewState.active = false;
        chatbot.appendMessage('bot', '⏭️ Review skipped. No worries — you can always come back to review your understanding later! Heading back to the dashboard...');
        setTimeout(() => {
            app.showDashboard();
        }, 1500);
    },

    // Extensive Knowledge Base for Rule-Based Matching
    knowledgeBase: [
        // Data Sources & Citations - KEEP THIS HARDCODED
        { keys: ["source", "data", "where", "from", "origin", "real", "fake", "accurate", "reliable", "truth", "numbers", "dataset"], answer: "Our simulation data (Panic Room & Flashback) is sourced directly from the **NSE (National Stock Exchange)**. Module content is based on **SEBI** investor guidelines. Verify at <a href='https://www.nseindia.com/' target='_blank'>nseindia.com</a>." }
    ],

    findBestMatch: (text) => {
        const tokens = text.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/);
        let bestMatch = null;
        let highestScore = 0;

        chatbot.knowledgeBase.forEach(item => {
            let score = 0;
            item.keys.forEach(key => {
                if (text.toLowerCase().includes(key)) {
                    score += key.length;
                }
                if (tokens.includes(key)) score += 2;
            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }
        });

        if (highestScore >= 3) {
            return bestMatch.answer;
        }
        return null;
    },

    send: async () => {
        const input = document.getElementById('chatbot-input');
        const text = input.value.trim();
        if (!text) return;

        chatbot.appendMessage('user', text);
        input.value = '';

        // If in review mode, route to evaluateAnswer
        if (chatbot.reviewState.active) {
            await chatbot.evaluateAnswer(text);
            return;
        }

        chatbot.appendMessage('bot', '...');

        // 1. Try Local Knowledge Base First (Fast & Accurate for FAQs)
        let response = chatbot.findBestMatch(text);

        // 2. If no local match, use Groq API (General AI)
        if (!response) {
            const messages = [
                { role: 'system', content: 'You are NIVI, a helpful, polite, and wise financial assistant for Indian investors. Explain concepts simply. Keep answers under 80 words. Be encouraging.' },
                { role: 'user', content: text }
            ];
            // callGroq is async, so we await it
            response = await chatbot.callGroq(messages, chatbot.GROQ_API_KEY_CHATBOT);
        }

        // 3. Render Response
        const msgs = document.getElementById('chatbot-messages');
        // Remove the "..." loading message
        if (msgs.lastChild.innerText === '...') msgs.lastChild.remove();

        if (!response) {
            response = "I'm having trouble connecting to my brain right now. Please check your internet or try again later! 🧠";
        }

        // Format Links and Bolds
        response = response.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color:var(--primary);text-decoration:underline;">$1</a>');
        response = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        chatbot.appendMessage('bot', response);
    }
};

const storage = {
    save: () => localStorage.setItem('nivi_state', JSON.stringify(state)),
    load: () => {
        const saved = localStorage.getItem('nivi_state');
        if (saved) {
            const loaded = JSON.parse(saved);
            state = { ...state, ...loaded };
        }
    },
    clear: () => {
        localStorage.removeItem('nivi_state');
        window.location.reload();
    }
};
storage.load();

const candlestickPlugin = {
    id: 'candlestickPlugin',
    afterDatasetsDraw: (chart) => {
        const { ctx, chartArea: { left, top, right, bottom }, scales: { x, y } } = chart;
        const datasets = chart.data.datasets;
        
        ctx.save();
        
        // Clip all drawings to the chart grid area so nothing overflows the axes!
        ctx.beginPath();
        ctx.rect(left, top, right - left, bottom - top);
        ctx.clip();
        
        datasets.forEach((dataset, datasetIndex) => {
            if (!dataset.candlestick) return;
            
            const meta = chart.getDatasetMeta(datasetIndex);
            const candles = dataset.candles || [];
            
            meta.data.forEach((element, index) => {
                const candle = candles[index];
                if (!candle) return;
                
                const xPos = element.x;
                const yOpen = y.getPixelForValue(candle.o);
                const yClose = y.getPixelForValue(candle.c);
                const yHigh = y.getPixelForValue(candle.h);
                const yLow = y.getPixelForValue(candle.l);
                
                const isBullish = candle.c >= candle.o;
                const color = isBullish ? '#22c55e' : '#ef4444';
                
                // Draw wick
                ctx.strokeStyle = color;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(xPos, yHigh);
                ctx.lineTo(xPos, yLow);
                ctx.stroke();
                
                // Draw body
                const count = meta.data.length;
                const areaWidth = right - left;
                const bodyWidth = Math.max(3, Math.min(12, (areaWidth / count) * 0.6));
                
                ctx.fillStyle = color;
                const height = Math.abs(yOpen - yClose);
                if (height < 1) {
                    ctx.fillRect(xPos - bodyWidth / 2, yOpen - 0.5, bodyWidth, 1);
                } else {
                    ctx.fillRect(xPos - bodyWidth / 2, Math.min(yOpen, yClose), bodyWidth, height);
                }
            });
        });
        ctx.restore();
    }
};

const app = {
    logout: () => {
        if (window.firebase && firebase.apps.length) {
            firebase.auth().signOut().catch(console.error);
        }
        state.user = null;
        storage.save();
        window.location.reload();
    },
    updateHeader: () => {
        const lang = state.lang || 'en';
        const matchStr = `'${lang}'`;
        document.querySelectorAll('button[onclick*="setLanguage"]').forEach(btn => {
            if (btn.getAttribute('onclick').includes(matchStr)) {
                btn.style.background = 'var(--primary)';
                btn.style.color = 'white';
                btn.style.borderColor = 'var(--primary)';
            } else {
                btn.style.background = 'transparent';
                btn.style.color = 'var(--text-muted)';
                btn.style.border = '1px solid var(--border)';
            }
        });
    },
    init: async () => {
        storage.load(); // Load state first
        langSelector.render(); // Render language circle immediately
        await i18n.setLanguage(state.lang || 'en'); // Apply language and update UI

        // Explicitly bind the hero button
        const heroBtn = document.getElementById('hero-start-btn');
        if (heroBtn) {
            heroBtn.addEventListener('click', () => {
                console.log("Hero button clicked via listener");
                app.getStarted();
            });
        } else {
            console.error("Hero button NOT found during init");
        }

        app.initTickers();
        app.initFacts();
        app.initQuotes();
        app.initHovers();
        chatbot.init();

        // Make consent checkbox togglable with Enter key (Space already works natively)
        const consentBox = document.getElementById('user-consent');
        if (consentBox) {
            consentBox.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') { e.preventDefault(); consentBox.checked = !consentBox.checked; }
            });
        }

        // Focus trap for module player — keeps Tab cycling inside #module-page
        const modulePage = document.getElementById('module-page');
        if (modulePage) {
            modulePage.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') { app.showDashboard(); return; }
                if (e.key !== 'Tab') return;

                const focusable = Array.from(
                    modulePage.querySelectorAll('button:not([disabled]), [tabindex="0"]:not([disabled])')
                ).filter(el => !el.closest('.hidden') && el.offsetParent !== null);

                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
                } else {
                    if (document.activeElement === last) { e.preventDefault(); first.focus(); }
                }
            });
        }

        if (window.firebase && firebase.apps.length) {
            console.log("Firebase initialized. Setting up authentication listeners...");
            
            // 1. Explicitly check for redirect login results when returning from Google Sign-In
            firebase.auth().getRedirectResult()
                .then((result) => {
                    console.log("getRedirectResult completed. Result:", result);
                    if (result.user) {
                        const user = result.user;
                        console.log("Redirect login successful for user:", user.email);
                        state.user = {
                            name: user.displayName || "User",
                            phone: user.phoneNumber || "",
                            email: user.email || "",
                            yob: state.user ? (state.user.yob || "") : ""
                        };
                        storage.save();
                        app.updateGreeting();
                        
                        if (!state.rewardClaimed) {
                            document.getElementById('reward-modal').classList.add('active');
                        } else if (!state.comfortTopic) {
                            document.getElementById('comfort-topic-modal').classList.add('active');
                        } else {
                            app.showDashboard();
                        }
                    }
                })
                .catch((error) => {
                    console.error("Firebase Redirect Auth Error:", error);
                    alert("Sign-in failed: " + error.message);
                });

            // 2. Setup standard auth state changed observer for active session state syncing
            firebase.auth().onAuthStateChanged((user) => {
                console.log("onAuthStateChanged triggered. User:", user ? user.email : "null");
                if (user) {
                    const wasLanding = !state.user;
                    state.user = {
                        name: user.displayName || "User",
                        phone: user.phoneNumber || "",
                        email: user.email || "",
                        yob: state.user ? (state.user.yob || "") : ""
                    };
                    storage.save();
                    app.updateGreeting();
                    
                    if (wasLanding) {
                        console.log("Landing page detected on login. Transitioning to dashboard/modals...");
                        if (!state.rewardClaimed) {
                            document.getElementById('reward-modal').classList.add('active');
                        } else if (!state.comfortTopic) {
                            document.getElementById('comfort-topic-modal').classList.add('active');
                        } else {
                            app.showDashboard();
                        }
                    }
                }
            });
        }

        if (state.user) {
            app.showDashboard();
        } else {
            app.showScreen('landing');
        }
    },
    initTickers: () => {
        const moods = [
            { icon: "⏳", text: "Initializing Nivi Experience..." },
            { icon: "📉", text: "Today’s market mood: Volatile" },
            { icon: "🧘", text: "Did you know? Most investors lose money because they panic." },
            { icon: "🚨", text: "Nivi is simulating the 2020 crash right now." },
            { icon: "📈", text: "Market Mood: Cautiously Optimistic" }
        ];
        let idx = 0;
        setInterval(() => {
            idx = (idx + 1) % moods.length;
            const iconArea = document.getElementById('mood-icon');
            const textArea = document.getElementById('mood-text');
            if (iconArea && textArea) {
                iconArea.innerText = moods[idx].icon;
                textArea.innerText = moods[idx].text;
            }
        }, 4000);
    },
    initFacts: () => {
        const facts = [
            "Time in the market beats timing the market.",
            "In 2020, NIFTY fell 38% and recovered in 9 months.",
            "93% of F&O traders lose money.",
            "Inflation is the silent thief of your purchasing power.",
            "Compounding is the 8th wonder of the world.",
            "The best time to invest was yesterday. The second best time is now."
        ];
        let idx = 0;
        setInterval(() => {
            const el = document.getElementById('market-fact');
            if (el) {
                el.style.opacity = '0';
                setTimeout(() => {
                    idx = (idx + 1) % facts.length;
                    el.innerText = facts[idx];
                    el.style.opacity = '1';
                }, 4000);
            }
        }, 8000);
    },
    updateGreeting: () => {
        if (state.user) {
            const el = document.getElementById('dash-greeting');
            if (el) {
                el.innerText = `Hey, ${state.user.name.split(' ')[0]}!`;
                el.style.cursor = 'pointer';
                el.onclick = () => app.showProfile();
            }
        }
    },
    initHovers: () => {
        const ringContainer = document.getElementById('ring-container');
        const panel = document.getElementById('ring-insight-panel');

        if (ringContainer && panel) {
            ringContainer.onmouseenter = async () => {
                // 1. Calculate Data
                const modsDone = state.moduleProgress.filter(p => p === 100).length;
                const totalMods = state.moduleProgress.length;
                const knowledgeScore = Math.round((modsDone / totalMods) * 100);

                // Fake "Panic Control" based on sim completion
                let panicStatus = "-";
                if (state.simCompleted) panicStatus = "High";
                else if (state.simUnlocked) panicStatus = "Med";

                // Insight Rank (Pseudo-calc based on behavior score)
                let rank = "Top 50%";
                if (state.behaviorScore > 80) rank = "Top 5%";
                else if (state.behaviorScore > 50) rank = "Top 10%";
                else if (state.behaviorScore > 30) rank = "Top 25%";

                // 3. Dynamic Insight Text
                const insights = [
                    "Your behavior under stress is developing.",
                    "You are showing signs of a disciplined investor.",
                    "Consistency is your strongest asset right now.",
                    "You are avoiding common retail traps. Keep it up."
                ];
                let insightText = insights[state.behaviorScore % insights.length];

                // --- TRANSLATION ---
                const lang = state.lang || 'en';
                if (lang !== 'en') {
                    // Translate Rank and Insight in parallel
                    const [tRank, tInsight, tPanic] = await Promise.all([
                        i18n.tDynamic(rank, lang),
                        i18n.tDynamic(insightText, lang),
                        i18n.tDynamic(panicStatus, lang)
                    ]);
                    rank = tRank;
                    insightText = tInsight;
                    panicStatus = tPanic;
                }

                // 2. Populate DOM
                const elKnow = document.getElementById('insight-knowledge');
                const elPanic = document.getElementById('insight-panic');
                const elBehav = document.getElementById('insight-behavior');
                const elRank = document.getElementById('insight-rank');
                const elText = document.getElementById('insight-text');

                if (elKnow) elKnow.innerText = `${knowledgeScore}%`;
                if (elPanic) elPanic.innerText = panicStatus;
                if (elBehav) elBehav.innerText = `${state.behaviorScore}/100`;
                if (elRank) elRank.innerText = rank;
                if (elText) elText.innerText = insightText;

                // Show Panel
                panel.classList.remove('hidden');
            };

            // Allow mouse to enter panel
            ringContainer.onmouseleave = (e) => {
                // CSS handles fade out
            };
        }
    },

    initQuotes: () => {
        const finalQuotes = [
            { text: "Markets are not about getting rich quick.<br>They are about staying rich.", author: "Rakesh Jhunjhunwala" },
            { text: "You need patience, discipline, and an ability to take pain.", author: "Rakesh Jhunjhunwala" },
            { text: "Investing is a test of character, not IQ.", author: "Nithin Kamath" },
            { text: "The worst reaction to a market crash is panic.", author: "Raghuram Rajan" },
            { text: "Risk comes from not knowing what you are doing.", author: "Warren Buffett" },
            { text: "Only buy something that you’d be perfectly happy to hold if the market shut down for 10 years.", author: "Warren Buffett" },
            { text: "The Stock Market is a device for transferring money from the Impatient to the Patient.", author: "Warren Buffett" },
            { text: "In the short run, the market is a voting machine but in the long run, it is a weighing machine.", author: "Benjamin Graham" },
            { text: "Knowing what you don't know is more useful than being brilliant.", author: "Charlie Munger" },
            { text: "In investing, what is comfortable is rarely profitable.", author: "Robert Arnott" },
            { text: "The four most dangerous words in investing are: 'this time it's different.'", author: "Sir John Templeton" },
            { text: "Don't look for the needle in the haystack. Just buy the haystack.", author: "John Bogle" },
            { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
            { text: "The best way to measure your success is not by beating the market, but by following a behavioral discipline.", author: "Benjamin Graham" },
            { text: "The individual investor should act consistently as an investor and not as a speculator.", author: "Benjamin Graham" },
            { text: "Wide diversification is only required when investors do not understand what they are doing.", author: "Warren Buffett" },
            { text: "Invest for the long-term. Don’t be greedy and don’t be fearful.", author: "Shelby M.C. Davis" },
            { text: "The goal of a successful investor is to purchase securities at prices that are low relative to their values.", author: "Seth Klarman" },
            { text: "Every once in a while, the market does something so stupid it takes your breath away.", author: "Jim Cramer" },
            { text: "Successful investing is about managing risk, not avoiding it.", author: "Benjamin Graham" },
            { text: "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.", author: "Warren Buffett" },
            { text: "The stock market is filled with individuals who know the price of everything, but the value of nothing.", author: "Philip Fisher" },
            { text: "The investor’s chief problem—and even his worst enemy—is likely to be himself.", author: "Benjamin Graham" },
            { text: "Wait for the fat pitch.", author: "Warren Buffett" },
            { text: "Buy when there's blood in the streets, even if the blood is your own.", author: "Baron Rothschild" },
            { text: "A market downturn is an opportunity to increase ownership of great enterprises at good prices.", author: "Warren Buffett" },
            { text: "The most important thing for an investor is not his intellect but his temperament.", author: "Warren Buffett" },
            { text: "History never repeats itself, but it does often rhyme.", author: "Mark Twain" },
            { text: "In finance, if you want a friend, get a dog.", author: "Carl Icahn" },
            { text: "If you spend more than 13 minutes a year analyzing forecasts, you've wasted 10 minutes.", author: "Peter Lynch" },
            { text: "Investing should be more like watching paint dry. If you want excitement, go to Las Vegas.", author: "Paul Samuelson" },
            { text: "All intelligent investing is value investing—acquiring more than you are paying for.", author: "Charlie Munger" },
            { text: "The stock market is a giant distraction to the business of investing.", author: "John Bogle" },
            { text: "Your financial success is in your hands—and in your behavior.", author: "Nivi Awareness" },
            { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
            { text: "Emotional intelligence is more important than financial intelligence.", author: "Behavioral Finance" },
            { text: "Money is like manure. You have to spread it around or it smells.", author: "J. Paul Getty" },
            { text: "Price is what you pay. Value is what you get.", author: "Warren Buffett" },
            { text: "Risk is what's left over when you think you've thought of everything.", author: "Carl Richards" },
            { text: "Be fearful when others are greedy and greedy when others are fearful.", author: "Warren Buffett" },
            { text: "Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1.", author: "Warren Buffett" },
            { text: "The stock market is never obvious. It is designed to fool most people, most of the time.", author: "Jesse Livermore" },
            { text: "Wealth is the ability to fully experience life.", author: "Henry David Thoreau" },
            { text: "Capitalism without bankruptcy is like religion without hell.", author: "Frank Borman" },
            { text: "Compounding is the magic that turns tiny seeds into mighty oaks.", author: "Financial Wisdom" },
            { text: "Patience is a virtue in life, but a necessity in the stock market.", author: "Behavioral Finance" },
            { text: "Markets crash. Life goes on. The disciplined prevail.", author: "Nivi Wisdom" },
            { text: "Understand the game before you risk your skin.", author: "Nivi" },
            { text: "The intelligent investor is a realist who sells to optimists and buys from pessimists.", author: "Benjamin Graham" },
            { text: "In the world of money, which is a world shaped by human behavior, nobody has a foggiest idea what will happen next.", author: "Morgan Housel" }
        ];

        let idx = 0;

        // Initial load
        const loadQuote = async () => {
            const textBox = document.getElementById('quote-text');
            const authorBox = document.getElementById('quote-author');
            if (!textBox || !authorBox) return;

            // 1. Fade Out
            textBox.style.opacity = '0';
            authorBox.style.opacity = '0';

            // 2. Fetch Translation
            const q = finalQuotes[idx];
            const lang = state.lang || 'en';
            let tText = q.text;
            let tAuthor = q.author;

            if (lang !== 'en') {
                tText = await i18n.tDynamic(q.text, lang);
                // Keep author names in English usually, but can translate if needed. 
                // Let's keep authors in English for authenticity or minimal change.
            }

            // 3. Update DOM after delay for fade
            setTimeout(() => {
                textBox.innerHTML = tText;
                authorBox.innerText = tAuthor;
                textBox.style.opacity = '1';
                authorBox.style.opacity = '1';
            }, 500);

            idx = (idx + 1) % finalQuotes.length;
        };

        // Run once immediately (or after short delay)
        setTimeout(loadQuote, 100);

        // Then loop
        setInterval(loadQuote, 6000);
    },
    getStarted: () => {
        console.log("getStarted called");
        app.showScreen('onboarding');
    },
    signInWithGoogle: () => {
        if (!window.firebase || !firebase.apps.length) {
            alert("Firebase is not initialized. Please configure your credentials in nivi.html.");
            return;
        }
        
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                if (result.user) {
                    const user = result.user;
                    console.log("Popup login successful for user:", user.email);
                    state.user = { 
                        name: user.displayName || "User", 
                        phone: user.phoneNumber || "", 
                        email: user.email || "", 
                        yob: "" 
                    };
                    storage.save();
                    app.updateGreeting();

                    if (!state.rewardClaimed) {
                        document.getElementById('reward-modal').classList.add('active');
                    } else if (!state.comfortTopic) {
                        document.getElementById('comfort-topic-modal').classList.add('active');
                    } else {
                        app.showDashboard();
                    }
                }
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
                alert("Sign in failed: " + error.message);
            });
    },
    claimReward: () => {
        state.behaviorScore += 10;
        state.rewardClaimed = true;
        storage.save();
        document.getElementById('reward-modal').classList.remove('active');
        // Show comfort topic modal instead of dashboard
        document.getElementById('comfort-topic-modal').classList.add('active');
    },
    // --- COMFORT TOPIC METHODS ---
    submitComfortTopic: async () => {
        const input = document.getElementById('comfort-topic-input');
        const errorEl = document.getElementById('comfort-topic-error');
        const submitBtn = document.getElementById('comfort-topic-submit');
        const topic = input.value.trim();

        if (!topic || topic.length < 2) {
            input.classList.add('invalid');
            errorEl.textContent = 'Please enter a topic (at least 2 characters).';
            return;
        }
        input.classList.remove('invalid');
        errorEl.textContent = '';

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="comfort-topic-spinner"></span> Validating...';

        // Validate via Groq
        const validationPrompt = `You are validating whether a user's chosen topic can be used to explain financial and investing concepts through analogies.

The user wants to learn investing concepts explained using analogies from: "${topic}"

Sample concepts that need analogies:
- Inflation eroding purchasing power
- Compounding and exponential growth
- Diversification to reduce risk
- Bull and Bear markets
- SIP (Systematic Investment Plan)

Can ALL of these concepts be meaningfully explained using "${topic}" analogies?

Respond with EXACTLY one word: YES or NO
If NO, add a brief reason on the next line.`;

        const result = await chatbot.callGroq([
            { role: 'system', content: 'You are a validation assistant. Respond with YES or NO only, followed by a brief reason if NO.' },
            { role: 'user', content: validationPrompt }
        ], chatbot.GROQ_API_KEY_TOPIC);

        submitBtn.disabled = false;
        submitBtn.innerHTML = '✨ Validate & Continue';

        if (!result) {
            errorEl.textContent = 'Could not validate. Please check your internet connection and try again.';
            return;
        }

        const firstLine = result.trim().split('\n')[0].trim().toUpperCase();
        if (firstLine.startsWith('YES')) {
            // Topic accepted
            state.comfortTopic = topic;
            storage.save();
            document.getElementById('comfort-topic-modal').classList.remove('active');
            app.showDashboard();
        } else {
            // Topic rejected
            input.classList.add('invalid');
            const reason = result.trim().split('\n').slice(1).join(' ').trim();
            errorEl.textContent = reason || `"${topic}" doesn't work well for explaining investing concepts. Try something more relatable like Farming, Cricket, or Cooking.`;
        }
    },
    skipComfortTopic: () => {
        state.comfortTopic = '__skip__';
        storage.save();
        document.getElementById('comfort-topic-modal').classList.remove('active');
        app.showDashboard();
    },
    changeComfortTopic: () => {
        // Clear cached analogies
        const keys = Object.keys(localStorage);
        keys.forEach(k => {
            if (k.startsWith('analogy_')) localStorage.removeItem(k);
        });
        state.comfortTopic = null;
        storage.save();
        document.getElementById('comfort-topic-input').value = '';
        document.getElementById('comfort-topic-error').textContent = '';
        document.getElementById('comfort-topic-modal').classList.add('active');
    },
    validateEmail: (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    validatePhone: (phone) => {
        return /^[0-9+]{10,14}$/.test(phone.replace(/\s/g, ''));
    },
    validateYOB: (yob) => {
        const year = parseInt(yob);
        const currentYear = new Date().getFullYear();
        return year > 1900 && year <= currentYear;
    },
    updateDash: () => {
        app.updateGreeting();
        app.initHovers();
        const scoreNumber = document.getElementById('score-number');
        const scoreStage = document.getElementById('score-stage');
        const scoreRing = document.getElementById('score-ring-fill');

        let score = Math.min(state.behaviorScore, 100);
        scoreNumber.innerText = Math.round(score);

        // Stage Mapping
        let stage = "Starting Out";
        if (score > 85) stage = "Ready";
        else if (score > 60) stage = "Confident";
        else if (score > 30) stage = "Foundation";
        scoreStage.innerText = stage;

        // Update SVG Ring
        const radius = 50;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (Math.min(score, 100) / 100) * circumference;
        scoreRing.style.strokeDasharray = `${circumference} ${circumference}`;
        scoreRing.style.strokeDashoffset = offset;

        // Unlock Panic Room if Mod 3 (index 3) is done
        if (state.moduleProgress[3] === 100) {
            state.simUnlocked = true;
            const simCard = document.getElementById('sim-card');
            simCard.classList.remove('locked');
        }

        modules.forEach((_, i) => {
            const cardID = i === 4 ? 'sim-card' : `mod-${i}`;
            const card = document.getElementById(cardID);
            if (!card) return;

            let isLocked = false;
            if (i > 0) {
                const prevProgress = state.moduleProgress[i - 1] || 0;
                if (prevProgress < 100) isLocked = true;
            }

            if (i === 4) isLocked = !state.simUnlocked; // Sim still uses its own unlock logic for now

            const progress = state.moduleProgress[i] || 0;
            const fill = document.getElementById(`fill-${i}`);
            if (fill) fill.style.width = progress + '%';

            const tickBtn = card.querySelector('.mark-complete-tiny');
            if (isLocked) {
                card.classList.add('locked');
                if (tickBtn) tickBtn.innerHTML = '🔒';
            } else {
                card.classList.remove('locked');
                if (tickBtn) tickBtn.innerHTML = '✓';
            }

            if (progress === 100) card.classList.add('completed');
        });
    },
    showDashboard: () => {
        app.updateDash();
        app.showScreen('dashboard');
        window.scrollTo(0, 0);
        const cb = document.getElementById('chatbot-trigger');
        if (cb) cb.classList.remove('hidden');

        // Start guided tour on first visit
        if (!state.tourCompleted) {
            setTimeout(() => tour.start(), 800);
        }
    },


    // Tilt Effect Removed
    initTilt: () => { },

    // Module Player
    curMod: 0, curCard: 0,
    startModule: (i) => {
        const cardID = i === 4 ? 'sim-card' : `mod-${i}`;
        const card = document.getElementById(cardID);
        if (card && card.classList.contains('locked')) {
            alert("Complete the previous module to unlock this one.");
            return;
        }
        app.curMod = i; app.curCard = 0;
        window.moduleStartTime = Date.now();
        window.moduleQuizCorrect = 0;
        window.moduleQuizTotal = 0;
        const m = modules[i];

        if (m.type === 'simulation_first' && !state.simCompleted) {
            app.startSimulation();
            return;
        }

        app.showScreen('module-page');
        window.scrollTo(0, 0);
        app.renderCard();

        // Move focus into the module player so keyboard users are immediately inside it
        setTimeout(() => {
            const closeBtn = document.querySelector('#module-page button[aria-label]');
            if (closeBtn) closeBtn.focus();
        }, 100);
    },

    renderCard: async () => {
        const m = modules[app.curMod];
        const c = m.cards[app.curCard];
        const isLast = app.curCard === m.cards.length - 1;
        const lang = state.lang || 'en';

        // --- PREPARE CONTENT (TRANSLATE IF NEEDED) ---
        let dTitle = m.title;
        let dSub = c.type === 'quiz' ? 'Knowledge Check' : (c.title || '');
        let dHeading = c.title || ''; // Fallback for heading in content
        let dBody = c.text || '';
        let dQuestion = c.question || '';
        let dOptions = c.options || [];
        let dExplanation = c.explanation || '';

        if (lang !== 'en') {
            // Parallel Translation
            const [tTitle, tSub, tHeading, tBody, tQuestion, tExpl] = await Promise.all([
                i18n.tDynamic(dTitle, lang),
                i18n.tDynamic(dSub, lang),
                i18n.tDynamic(dHeading, lang),
                i18n.tDynamic(dBody, lang),
                i18n.tDynamic(dQuestion, lang),
                i18n.tDynamic(dExplanation, lang)
            ]);

            dTitle = tTitle;
            if (c.type === 'quiz') dSub = tSub; // "Knowledge Check" translated
            else dSub = tSub; // c.title translated for subtitle

            dHeading = tHeading;
            dBody = tBody;
            dQuestion = tQuestion;
            dExplanation = tExpl;

            // Translate Options separately
            if (c.options) {
                dOptions = await Promise.all(c.options.map(opt => i18n.tDynamic(opt, lang)));
            }
        }

        // --- COMFORT TOPIC ANALOGY GENERATION ---
        if (c.type === 'content' && state.comfortTopic && state.comfortTopic !== '__skip__' && dBody) {
            const cacheKey = `analogy_${state.comfortTopic}_${app.curMod}_${app.curCard}`;
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                dBody = cached;
            } else {
                // Show a subtle loading state
                const body = document.getElementById('story-body');
                body.innerHTML = `<div style="text-align:center;padding:3rem;"><div class="comfort-topic-spinner" style="border-color:rgba(0,48,135,0.15);border-top-color:var(--primary);width:36px;height:36px;border-width:4px;"></div><p style="margin-top:1rem;color:var(--text-muted);font-size:0.9rem;">Personalizing with ${state.comfortTopic} analogies...</p></div>`;

                const analogyPrompt = `Explain this investing concept in the domain of ${state.comfortTopic}. Use ₹ for currency, never $. Structure your response in 2-3 short paragraphs separated by blank lines.\n\n${c.text}`;

                const analogy = await chatbot.callGroq([
                    { role: 'system', content: `You explain investing concepts using the domain of ${state.comfortTopic}. Write in 2-3 short paragraphs. Be concise. No headings or titles.` },
                    { role: 'user', content: analogyPrompt }
                ], chatbot.GROQ_API_KEY_TOPIC);

                if (analogy) {
                    let cleaned = analogy;
                    // Convert markdown bold to HTML bold
                    cleaned = cleaned.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
                    // Remove any markdown headings
                    cleaned = cleaned.replace(/^#{1,3}\s+.*$/gm, '');
                    // Convert double newlines to <br><br>
                    cleaned = cleaned.replace(/\n\n+/g, '<br><br>');
                    // Convert single newlines to <br>
                    cleaned = cleaned.replace(/\n/g, '<br>');
                    // Clean up any stray escaped br tags from the AI
                    cleaned = cleaned.replace(/&lt;br&gt;/g, '<br>');
                    cleaned = cleaned.trim();
                    localStorage.setItem(cacheKey, cleaned);
                    dBody = cleaned;
                }
                // If API fails, dBody stays as original — graceful fallback
            }
        }

        // --- DOM UPDATES ---
        document.getElementById('story-title').innerText = dTitle;
        document.getElementById('story-subtitle').innerText = dSub;
        document.getElementById('story-progress').innerText = `Step ${app.curCard + 1} of ${m.cards.length}`;

        // Update Progress Bar
        const progBar = document.getElementById('module-progress-bar');
        progBar.style.width = ((app.curCard + 1) / m.cards.length * 100) + '%';

        const body = document.getElementById('story-body');
        body.innerHTML = '';
        body.scrollTop = 0; // Reset scroll

        // Trigger fade-in
        body.style.opacity = '0';
        setTimeout(() => {
            body.style.transition = 'opacity 0.4s ease';
            body.style.opacity = '1';
        }, 50);

        if (c.type === 'content') {
            body.innerHTML = `<div><div class="story-icon-lg">${c.icon}</div><h2>${dHeading}</h2><p>${dBody.replace(/\n/g, '<br>')}</p></div>`;
            document.getElementById('next-btn').style.display = isLast ? 'none' : 'inline-flex';
        } else {
            // Quiz
            let opts = dOptions.map((o, i) => `<button class="quiz-option" onclick="app.check(this,${i},${c.correct},'${dExplanation.replace(/'/g, "\\'")}')">${o}</button>`).join('');
            body.innerHTML = `<div><h3 style="margin-bottom:2.5rem; font-size:1.65rem; line-height:1.4; font-weight:700;">${dQuestion}</h3>${opts}<div id="quiz-fb" class="hidden"></div></div>`;
            document.getElementById('next-btn').style.display = 'none';
        }

        document.getElementById('complete-btn').style.display = isLast ? 'inline-flex' : 'none';

        const dots = document.getElementById('story-dots');
        dots.className = "story-dots-container";
        dots.innerHTML = m.cards.map((_, i) => `<div class="story-dot ${i === app.curCard ? 'active' : ''}"></div>`).join('');

        document.getElementById('prev-btn').disabled = app.curCard === 0;

        // Save Incremental Progress
        const progressPercent = Math.round(((app.curCard + 1) / m.cards.length) * 100);
        if (progressPercent > (state.moduleProgress[app.curMod] || 0)) {
            state.moduleProgress[app.curMod] = progressPercent;
            storage.save();
        }
    },
    check: (btn, i, corr, expl) => {
        const fb = document.getElementById('quiz-fb');
        const quizId = `${app.curMod}-${app.curCard}`;
        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
        window.moduleQuizTotal++;
        if (i === corr) {
            window.moduleQuizCorrect++;
            btn.classList.add('correct');
            fb.innerHTML = `<div class="explanation" style="border-left-color:var(--primary);background:var(--accent-soft);color:var(--primary-dark)"><strong>Correct!</strong><br>${expl}</div>`;
            announce(`Correct! ${expl}`, 'assertive');

            // Only award points once
            if (!state.completedQuizzes.includes(quizId)) {
                state.behaviorScore += 2;
                state.completedQuizzes.push(quizId);
            }
        } else {
            btn.classList.add('incorrect');
            document.querySelectorAll('.quiz-option')[corr].classList.add('correct');
            fb.innerHTML = `<div class="explanation" style="border-left-color:var(--warning);background:#fffbeb;color:#92400e"><strong>Review:</strong><br>${expl}</div>`;
            announce(`Incorrect. Review: ${expl}`, 'assertive');
        }
        fb.classList.remove('hidden');
        fb.classList.add('slide-up');
        document.getElementById('next-btn').style.display = 'inline-flex';

    },
    nextCard: () => {
        const m = modules[app.curMod];
        if (app.curCard < m.cards.length - 1) {
            app.curCard++;
            app.renderCard();
        }
    },
    completeModule: () => {
        state.moduleProgress[app.curMod] = 100;
        if (!state.completedModules.includes(app.curMod)) {
            state.behaviorScore += 10;
            state.completedModules.push(app.curMod);
        }
        storage.save();

        // Local behavioral scoring logic
        const timeSpent = (Date.now() - (window.moduleStartTime || Date.now())) / 1000;
        let quizScore = window.moduleQuizTotal > 0 ? (window.moduleQuizCorrect / window.moduleQuizTotal) : 1.0;

        let points = 5; // Base 5 points for completing
        if (timeSpent > 30) points += 5; // Good pacing
        if (quizScore >= 0.8) points += 5; // Good quiz performance

        state.behaviorScore += points;
        storage.save();
        app.updateDash();

        // Trigger post-module review chatbot
        chatbot.startReview(app.curMod);
    },
    completeModuleShortcut: (e, i) => {
        if (e) e.stopPropagation();
        state.moduleProgress[i] = 100;
        if (!state.completedModules.includes(i)) {
            state.behaviorScore += 5; // Smaller bonus for shortcuts
            state.completedModules.push(i);
        }
        storage.save();
        app.updateDash();
        // Trigger post-module review chatbot
        chatbot.startReview(i);
    },
    prevCard: () => {
        if (app.curCard > 0) { app.curCard--; app.renderCard(); }
    },
    toggleProfileEdit: (isEditing) => {
        const prof = document.getElementById('profile');
        if (isEditing) prof.classList.add('editing');
        else prof.classList.remove('editing');
    },
    showProfile: () => {
        if (!state.user) return;
        app.toggleProfileEdit(false); // Reset to view mode

        // View Mode
        document.getElementById('prof-view-name').innerText = state.user.name;
        document.getElementById('prof-view-email').innerText = state.user.email;
        document.getElementById('prof-val-name').innerText = state.user.name;
        document.getElementById('prof-val-phone').innerText = state.user.phone || 'Not provided';
        document.getElementById('prof-val-email').innerText = state.user.email;
        document.getElementById('prof-val-yob').innerText = state.user.yob || '-';

        // Edit Mode Fields
        document.getElementById('prof-edit-name').value = state.user.name;
        document.getElementById('prof-edit-email').value = state.user.email;
        document.getElementById('prof-edit-phone').value = state.user.phone || '';
        document.getElementById('prof-edit-yob').value = state.user.yob || '';

        const initials = state.user.name.split(' ').map(n => n[0]).join('').toUpperCase();
        document.getElementById('prof-initials').innerText = initials;

        // Show comfort topic info in profile
        let topicContainer = document.getElementById('prof-comfort-topic');
        if (!topicContainer) {
            topicContainer = document.createElement('div');
            topicContainer.id = 'prof-comfort-topic';
            topicContainer.style.cssText = 'margin-top:1.5rem;padding:1.25rem;background:var(--accent-soft);border-radius:16px;border:1px solid rgba(0,48,135,0.08);';
            const profileCard = document.querySelector('#profile .card') || document.getElementById('profile');
            if (profileCard) profileCard.appendChild(topicContainer);
        }
        const currentTopic = state.comfortTopic && state.comfortTopic !== '__skip__' ? state.comfortTopic : 'Not set';
        topicContainer.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                        <div>
                            <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);font-weight:600;margin-bottom:0.25rem;">🌱 Learning Style</div>
                            <div style="font-size:1.1rem;font-weight:700;color:var(--primary);">${currentTopic === 'Not set' ? 'Standard (no topic set)' : `Analogies from: ${currentTopic}`}</div>
                        </div>
                        <button class="btn btn-outline" style="font-size:0.8rem;padding:0.4rem 1rem;" onclick="app.changeComfortTopic()">
                            ${currentTopic === 'Not set' ? '✨ Set Topic' : '🔄 Change Topic'}
                        </button>
                    </div>
                `;

        app.showScreen('profile');
    },
    saveProfile: () => {
        const nameInput = document.getElementById('prof-edit-name');
        const emailInput = document.getElementById('prof-edit-email');
        const phoneInput = document.getElementById('prof-edit-phone');
        const yobInput = document.getElementById('prof-edit-yob');

        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const yob = yobInput.value;

        let valid = true;

        // Reset validation styles
        nameInput.classList.remove('invalid');
        emailInput.classList.remove('invalid');
        phoneInput.classList.remove('invalid');
        yobInput.classList.remove('invalid');

        if (!name) { valid = false; nameInput.classList.add('invalid'); }
        if (!app.validateEmail(email)) { valid = false; emailInput.classList.add('invalid'); }
        if (phone && !app.validatePhone(phone)) { valid = false; phoneInput.classList.add('invalid'); }
        if (!app.validateYOB(yob)) { valid = false; yobInput.classList.add('invalid'); }

        if (!valid) return;

        state.user = { name, email, phone, yob };
        storage.save();
        app.showProfile(); // Refresh view and toggle back
    },

    showScreen: (id) => {
        const screens = ['landing', 'onboarding', 'dashboard', 'module-page', 'simulation-page', 'profile', 'flashback-setup', 'sim-section', 'result-section'];
        screens.forEach(s => {
            const el = document.getElementById(s);
            if (el) el.classList.add('hidden');
        });
        const target = document.getElementById(id);
        if (target) {
            target.classList.remove('hidden');
            // Announce the screen change to screen readers
            const screenLabels = {
                'landing': 'Nivi landing page',
                'onboarding': 'Onboarding: Tell us about yourself',
                'dashboard': 'Your dashboard',
                'module-page': 'Module player',
                'simulation-page': 'Panic Room simulation',
                'profile': 'Your profile',
                'flashback-setup': 'Flashback Trading setup',
                'sim-section': 'Simulation in progress',
                'result-section': 'Your results'
            };
            announce(screenLabels[id] || id, 'polite');
            // Move focus to a heading or the container so keyboard users are oriented
            const heading = target.querySelector('h1,h2,h3,[tabindex="-1"]');
            if (heading) { heading.focus(); }
        }
        window.scrollTo(0, 0);
    },

    startSimulation: () => {
        if (!state.simUnlocked) return;
        app.showScreen('simulation-page');
        sim.init();
        window.scrollTo(0, 0);
    }
};

// Initialize app
// app.init(); // Remove duplicate if it exists at end


// --- GUIDED TOUR ---
const tour = {
    currentStep: 0,
    backdrop: null,
    tooltip: null,
    steps: [
        {
            target: 'ring-container',
            title: 'Your Readiness Score',
            desc: 'This ring tracks your progress. Complete modules, answer quizzes correctly, and spend quality time learning to earn points and level up.',
            position: 'right'
        },
        {
            target: 'module-grid',
            title: 'Learning Modules',
            desc: 'Start here! Work through each module in order. Each one covers a key investing concept with stories, real data, and quizzes.',
            position: 'top'
        },
        {
            target: 'flashback-card',
            title: 'Flashback Trading',
            desc: 'Build a portfolio using real Indian sectors and relive actual market history to see how your choices would have played out.',
            position: 'right'
        },
        {
            target: 'profile-tour-btn',
            title: 'Your Profile',
            desc: 'Tap here to view and edit your profile details. You can also change your comfort topic from the profile page anytime.',
            position: 'bottom-left'
        },
        {
            target: 'lang-circle-dash',
            title: 'Change Language & Topic',
            desc: 'Switch between English, Hindi, Kannada, and more. Your comfort topic — which personalizes lessons with analogies — can be changed from your profile.',
            position: 'bottom-left'
        }
    ],

    start: () => {
        // Create backdrop
        tour.backdrop = document.createElement('div');
        tour.backdrop.className = 'tour-backdrop';
        document.body.appendChild(tour.backdrop);

        // Create tooltip
        tour.tooltip = document.createElement('div');
        tour.tooltip.className = 'tour-tooltip';
        document.body.appendChild(tour.tooltip);

        // Activate backdrop after paint
        requestAnimationFrame(() => {
            tour.backdrop.classList.add('active');
            tour.currentStep = 0;
            tour.renderStep();
        });

        // Click on backdrop to skip
        tour.backdrop.addEventListener('click', tour.end);
    },

    renderStep: () => {
        const step = tour.steps[tour.currentStep];
        const targetEl = document.getElementById(step.target);
        if (!targetEl) { tour.end(); return; }

        // Clear previous highlights
        document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));

        // Scroll target into view
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Highlight target after scroll
        setTimeout(() => {
            targetEl.classList.add('tour-highlight');

            const isLast = tour.currentStep === tour.steps.length - 1;

            tour.tooltip.innerHTML = `
                <div class="tour-tooltip-step">Step ${tour.currentStep + 1} of ${tour.steps.length}</div>
                <div class="tour-tooltip-title">${step.title}</div>
                <div class="tour-tooltip-desc">${step.desc}</div>
                <div class="tour-tooltip-actions">
                    <button class="tour-skip-btn" onclick="tour.end()">Skip Tour</button>
                    <button class="tour-next-btn" onclick="${isLast ? 'tour.end()' : 'tour.next()'}">${isLast ? 'Got it!' : 'Next →'}</button>
                </div>
            `;

            // Position tooltip near target
            const rect = targetEl.getBoundingClientRect();
            const tooltipW = Math.min(360, window.innerWidth - 32);
            const tooltipH = tour.tooltip.offsetHeight || 220;
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            let top, left;

            if (step.position === 'right' && rect.right + tooltipW + 24 < vw) {
                // Position to the right of the element
                top = rect.top + rect.height / 2 - tooltipH / 2;
                left = rect.right + 16;
            } else if (step.position === 'bottom-left') {
                // Position below and aligned to the right edge of the element
                top = rect.bottom + 12;
                left = rect.right - tooltipW;
            } else {
                // Default: position below the element, right-aligned
                top = rect.bottom + 16;
                left = rect.right - tooltipW;
            }

            // Clamp within viewport
            top = Math.max(16, Math.min(top, vh - tooltipH - 16));
            left = Math.max(16, Math.min(left, vw - tooltipW - 16));

            tour.tooltip.style.top = top + 'px';
            tour.tooltip.style.left = left + 'px';

            // Animate in
            tour.tooltip.classList.remove('active');
            requestAnimationFrame(() => {
                tour.tooltip.classList.add('active');
            });
        }, 400);
    },

    next: () => {
        if (tour.currentStep < tour.steps.length - 1) {
            tour.currentStep++;
            tour.tooltip.classList.remove('active');
            setTimeout(() => tour.renderStep(), 200);
        } else {
            tour.end();
        }
    },

    end: () => {
        // Remove highlights
        document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));

        // Fade out
        if (tour.backdrop) tour.backdrop.classList.remove('active');
        if (tour.tooltip) tour.tooltip.classList.remove('active');

        // Remove elements after animation
        setTimeout(() => {
            if (tour.backdrop) { tour.backdrop.remove(); tour.backdrop = null; }
            if (tour.tooltip) { tour.tooltip.remove(); tour.tooltip = null; }
        }, 350);

        // Mark as completed
        state.tourCompleted = true;
        storage.save();
    }
};

const sim = {
    chart: null, interval: null, idx: 0, sip: 5000, invested: 0, val: 0, units: 0, decided: false,
    currentScenario: null,
    scenarios: [
        {
            id: 'covid',
            title: "COVID-19 Crash",
            contextTitle: "Simulation Context: 2020",
            contextDesc: "Investing <b>₹5,000 monthly (SIP)</b> into the <b>NIFTY 50 Index</b>.",
            panicTitle: "Market Crash",
            panicSubtitle: "COVID-19 Pandemic Declared",
            startYear: "2010",
            data: [
                { d: '2010', p: 5000 }, { d: '2011', p: 5500 }, { d: '2012', p: 5200 }, { d: '2013', p: 6000 },
                { d: '2014', p: 8000, n: "Election Results: Market Rally" }, { d: '2015', p: 8500 },
                { d: '2016', p: 7000, n: "Demonetization Volatility" }, { d: '2017', p: 9000 }, { d: '2018', p: 10500 },
                { d: '2019', p: 11500 }, { d: 'Jan 2020', p: 12100, n: "All Time Highs" },
                { d: 'Mar 2020', p: 7500, n: "COVID CRASH", panic: true },
                { d: 'Jun 2020', p: 9500 }, { d: 'Dec 2020', p: 13500, n: "V-Shape Recovery" },
                { d: '2021', p: 17000 }, { d: '2022', p: 17500 }, { d: '2023', p: 19500 }, { d: '2024', p: 25000, n: "New All Time Highs" }
            ]
        },
        {
            id: '2008',
            title: "Global Financial Crisis",
            contextTitle: "Simulation Context: 2008",
            contextDesc: "Investing <b>₹5,000 monthly (SIP)</b> into the <b>NIFTY 50 Index</b>.",
            panicTitle: "Global Financial Crisis",
            panicSubtitle: "Lehman Brothers & Liquidity Crisis",
            startYear: "2008",
            data: [
                {
                    "d": "10-JUL-2008",
                    "p": 4162.2,
                    "n": "Bull Run Ends"
                },
                {
                    "d": "11-JUL-2008",
                    "p": 4049.0
                },
                {
                    "d": "14-JUL-2008",
                    "p": 4039.7
                },
                {
                    "d": "15-JUL-2008",
                    "p": 3861.1
                },
                {
                    "d": "16-JUL-2008",
                    "p": 3816.7
                },
                {
                    "d": "17-JUL-2008",
                    "p": 3947.2
                },
                {
                    "d": "18-JUL-2008",
                    "p": 4092.25
                },
                {
                    "d": "21-JUL-2008",
                    "p": 4159.5
                },
                {
                    "d": "22-JUL-2008",
                    "p": 4240.1
                },
                {
                    "d": "23-JUL-2008",
                    "p": 4476.8
                },
                {
                    "d": "24-JUL-2008",
                    "p": 4433.55
                },
                {
                    "d": "25-JUL-2008",
                    "p": 4311.85
                },
                {
                    "d": "28-JUL-2008",
                    "p": 4332.1
                },
                {
                    "d": "29-JUL-2008",
                    "p": 4189.85
                },
                {
                    "d": "30-JUL-2008",
                    "p": 4313.55
                },
                {
                    "d": "31-JUL-2008",
                    "p": 4332.95
                },
                {
                    "d": "01-AUG-2008",
                    "p": 4413.55
                },
                {
                    "d": "04-AUG-2008",
                    "p": 4395.35
                },
                {
                    "d": "05-AUG-2008",
                    "p": 4502.85
                },
                {
                    "d": "06-AUG-2008",
                    "p": 4517.55
                },
                {
                    "d": "07-AUG-2008",
                    "p": 4523.85
                },
                {
                    "d": "08-AUG-2008",
                    "p": 4529.5
                },
                {
                    "d": "11-AUG-2008",
                    "p": 4620.4
                },
                {
                    "d": "12-AUG-2008",
                    "p": 4552.25
                },
                {
                    "d": "13-AUG-2008",
                    "p": 4529.05
                },
                {
                    "d": "14-AUG-2008",
                    "p": 4430.7
                },
                {
                    "d": "18-AUG-2008",
                    "p": 4393.05
                },
                {
                    "d": "19-AUG-2008",
                    "p": 4368.25
                },
                {
                    "d": "20-AUG-2008",
                    "p": 4415.75
                },
                {
                    "d": "21-AUG-2008",
                    "p": 4283.85
                },
                {
                    "d": "22-AUG-2008",
                    "p": 4327.45
                },
                {
                    "d": "25-AUG-2008",
                    "p": 4335.35
                },
                {
                    "d": "26-AUG-2008",
                    "p": 4337.5
                },
                {
                    "d": "27-AUG-2008",
                    "p": 4292.1
                },
                {
                    "d": "28-AUG-2008",
                    "p": 4214.0
                },
                {
                    "d": "29-AUG-2008",
                    "p": 4360.0
                },
                {
                    "d": "01-SEP-2008",
                    "p": 4348.65
                },
                {
                    "d": "02-SEP-2008",
                    "p": 4504.0
                },
                {
                    "d": "04-SEP-2008",
                    "p": 4447.75
                },
                {
                    "d": "05-SEP-2008",
                    "p": 4352.3
                },
                {
                    "d": "08-SEP-2008",
                    "p": 4482.3
                },
                {
                    "d": "09-SEP-2008",
                    "p": 4468.7
                },
                {
                    "d": "10-SEP-2008",
                    "p": 4400.25
                },
                {
                    "d": "11-SEP-2008",
                    "p": 4290.3
                },
                {
                    "d": "12-SEP-2008",
                    "p": 4228.45
                },
                {
                    "d": "15-SEP-2008",
                    "p": 4072.9,
                    "n": "Lehman Brothers Collapses"
                },
                {
                    "d": "16-SEP-2008",
                    "p": 4074.9
                },
                {
                    "d": "17-SEP-2008",
                    "p": 4008.25
                },
                {
                    "d": "18-SEP-2008",
                    "p": 4038.15
                },
                {
                    "d": "19-SEP-2008",
                    "p": 4245.25
                },
                {
                    "d": "22-SEP-2008",
                    "p": 4223.05
                },
                {
                    "d": "23-SEP-2008",
                    "p": 4126.9
                },
                {
                    "d": "24-SEP-2008",
                    "p": 4161.25
                },
                {
                    "d": "25-SEP-2008",
                    "p": 4110.55
                },
                {
                    "d": "26-SEP-2008",
                    "p": 3985.25
                },
                {
                    "d": "29-SEP-2008",
                    "p": 3850.05
                },
                {
                    "d": "30-SEP-2008",
                    "p": 3921.2
                },
                {
                    "d": "01-OCT-2008",
                    "p": 3950.75
                },
                {
                    "d": "03-OCT-2008",
                    "p": 3818.3,
                    "n": "Tata Nano Controversy: Factory Relocation"
                },
                {
                    "d": "06-OCT-2008",
                    "p": 3602.35
                },
                {
                    "d": "07-OCT-2008",
                    "p": 3606.6
                },
                {
                    "d": "08-OCT-2008",
                    "p": 3513.65
                },
                {
                    "d": "10-OCT-2008",
                    "p": 3279.95
                },
                {
                    "d": "13-OCT-2008",
                    "p": 3490.7
                },
                {
                    "d": "14-OCT-2008",
                    "p": 3518.65
                },
                {
                    "d": "15-OCT-2008",
                    "p": 3338.4
                },
                {
                    "d": "16-OCT-2008",
                    "p": 3269.3
                },
                {
                    "d": "17-OCT-2008",
                    "p": 3074.35
                },
                {
                    "d": "20-OCT-2008",
                    "p": 3122.8
                },
                {
                    "d": "21-OCT-2008",
                    "p": 3234.9
                },
                {
                    "d": "22-OCT-2008",
                    "p": 3065.15
                },
                {
                    "d": "23-OCT-2008",
                    "p": 2943.15
                },
                {
                    "d": "24-OCT-2008",
                    "p": 2584.0
                },
                {
                    "d": "27-OCT-2008",
                    "p": 2524.2,
                    "panic": true,
                    "n": "Global Financial Crisis: Market Bottom"
                },
                {
                    "d": "28-OCT-2008",
                    "p": 2684.6
                },
                {
                    "d": "29-OCT-2008",
                    "p": 2697.05
                },
                {
                    "d": "31-OCT-2008",
                    "p": 2885.6
                },
                {
                    "d": "03-NOV-2008",
                    "p": 3043.85
                },
                {
                    "d": "04-NOV-2008",
                    "p": 3142.1
                },
                {
                    "d": "05-NOV-2008",
                    "p": 2994.95
                },
                {
                    "d": "06-NOV-2008",
                    "p": 2892.65
                },
                {
                    "d": "07-NOV-2008",
                    "p": 2973.0
                },
                {
                    "d": "10-NOV-2008",
                    "p": 3148.25
                },
                {
                    "d": "11-NOV-2008",
                    "p": 2938.65
                },
                {
                    "d": "12-NOV-2008",
                    "p": 2848.45
                },
                {
                    "d": "14-NOV-2008",
                    "p": 2810.35
                },
                {
                    "d": "17-NOV-2008",
                    "p": 2799.55
                },
                {
                    "d": "18-NOV-2008",
                    "p": 2683.15
                },
                {
                    "d": "19-NOV-2008",
                    "p": 2635.0
                },
                {
                    "d": "20-NOV-2008",
                    "p": 2553.15
                },
                {
                    "d": "21-NOV-2008",
                    "p": 2693.45
                },
                {
                    "d": "24-NOV-2008",
                    "p": 2708.25
                },
                {
                    "d": "25-NOV-2008",
                    "p": 2654.0
                },
                {
                    "d": "26-NOV-2008",
                    "p": 2752.25,
                    "n": "Mumbai Terror Attacks (26/11)"
                },
                {
                    "d": "28-NOV-2008",
                    "p": 2755.1
                },
                {
                    "d": "01-DEC-2008",
                    "p": 2682.9
                },
                {
                    "d": "02-DEC-2008",
                    "p": 2657.8
                },
                {
                    "d": "03-DEC-2008",
                    "p": 2656.45
                },
                {
                    "d": "04-DEC-2008",
                    "p": 2788.0
                },
                {
                    "d": "05-DEC-2008",
                    "p": 2714.4
                },
                {
                    "d": "08-DEC-2008",
                    "p": 2784.0
                },
                {
                    "d": "10-DEC-2008",
                    "p": 2928.25
                },
                {
                    "d": "11-DEC-2008",
                    "p": 2920.15
                },
                {
                    "d": "12-DEC-2008",
                    "p": 2921.35
                },
                {
                    "d": "15-DEC-2008",
                    "p": 2981.2
                },
                {
                    "d": "16-DEC-2008",
                    "p": 3041.75
                },
                {
                    "d": "17-DEC-2008",
                    "p": 2954.35
                },
                {
                    "d": "18-DEC-2008",
                    "p": 3060.75
                },
                {
                    "d": "19-DEC-2008",
                    "p": 3077.5
                },
                {
                    "d": "22-DEC-2008",
                    "p": 3039.3
                },
                {
                    "d": "23-DEC-2008",
                    "p": 2968.65
                },
                {
                    "d": "24-DEC-2008",
                    "p": 2916.85
                },
                {
                    "d": "26-DEC-2008",
                    "p": 2857.25
                },
                {
                    "d": "29-DEC-2008",
                    "p": 2922.2
                },
                {
                    "d": "30-DEC-2008",
                    "p": 2979.5
                },
                {
                    "d": "31-DEC-2008",
                    "p": 2959.15
                },
                {
                    "d": "01-JAN-2009",
                    "p": 3033.45
                },
                {
                    "d": "02-JAN-2009",
                    "p": 3046.75
                },
                {
                    "d": "05-JAN-2009",
                    "p": 3121.45
                },
                {
                    "d": "06-JAN-2009",
                    "p": 3112.8
                },
                {
                    "d": "07-JAN-2009",
                    "p": 2920.4,
                    "n": "Satyam Computer Scandal (India's Enron)"
                },
                {
                    "d": "09-JAN-2009",
                    "p": 2873.0
                },
                {
                    "d": "12-JAN-2009",
                    "p": 2773.1
                },
                {
                    "d": "13-JAN-2009",
                    "p": 2744.95
                },
                {
                    "d": "14-JAN-2009",
                    "p": 2835.3
                },
                {
                    "d": "15-JAN-2009",
                    "p": 2736.7
                },
                {
                    "d": "16-JAN-2009",
                    "p": 2828.45
                },
                {
                    "d": "19-JAN-2009",
                    "p": 2846.2
                },
                {
                    "d": "20-JAN-2009",
                    "p": 2796.6
                },
                {
                    "d": "21-JAN-2009",
                    "p": 2706.15
                },
                {
                    "d": "22-JAN-2009",
                    "p": 2713.8
                },
                {
                    "d": "23-JAN-2009",
                    "p": 2678.55
                },
                {
                    "d": "27-JAN-2009",
                    "p": 2771.35
                },
                {
                    "d": "28-JAN-2009",
                    "p": 2849.5
                },
                {
                    "d": "29-JAN-2009",
                    "p": 2823.95
                },
                {
                    "d": "30-JAN-2009",
                    "p": 2874.8
                },
                {
                    "d": "02-FEB-2009",
                    "p": 2766.65
                },
                {
                    "d": "03-FEB-2009",
                    "p": 2783.9
                },
                {
                    "d": "04-FEB-2009",
                    "p": 2803.05
                },
                {
                    "d": "05-FEB-2009",
                    "p": 2780.05
                },
                {
                    "d": "06-FEB-2009",
                    "p": 2843.1
                },
                {
                    "d": "09-FEB-2009",
                    "p": 2919.9
                },
                {
                    "d": "10-FEB-2009",
                    "p": 2934.5
                },
                {
                    "d": "11-FEB-2009",
                    "p": 2925.7
                },
                {
                    "d": "12-FEB-2009",
                    "p": 2893.05
                },
                {
                    "d": "13-FEB-2009",
                    "p": 2948.35
                },
                {
                    "d": "16-FEB-2009",
                    "p": 2848.5
                },
                {
                    "d": "17-FEB-2009",
                    "p": 2770.5
                },
                {
                    "d": "18-FEB-2009",
                    "p": 2776.15
                },
                {
                    "d": "19-FEB-2009",
                    "p": 2789.35
                },
                {
                    "d": "20-FEB-2009",
                    "p": 2736.45
                },
                {
                    "d": "24-FEB-2009",
                    "p": 2733.9
                },
                {
                    "d": "25-FEB-2009",
                    "p": 2762.5
                },
                {
                    "d": "26-FEB-2009",
                    "p": 2785.65
                },
                {
                    "d": "27-FEB-2009",
                    "p": 2763.65
                },
                {
                    "d": "02-MAR-2009",
                    "p": 2674.6
                },
                {
                    "d": "03-MAR-2009",
                    "p": 2622.4
                },
                {
                    "d": "04-MAR-2009",
                    "p": 2645.2
                },
                {
                    "d": "05-MAR-2009",
                    "p": 2576.7
                },
                {
                    "d": "06-MAR-2009",
                    "p": 2620.15
                },
                {
                    "d": "09-MAR-2009",
                    "p": 2573.15
                },
                {
                    "d": "12-MAR-2009",
                    "p": 2617.45
                },
                {
                    "d": "13-MAR-2009",
                    "p": 2719.25
                },
                {
                    "d": "16-MAR-2009",
                    "p": 2777.25
                },
                {
                    "d": "17-MAR-2009",
                    "p": 2757.45
                },
                {
                    "d": "18-MAR-2009",
                    "p": 2794.7
                },
                {
                    "d": "19-MAR-2009",
                    "p": 2807.15
                },
                {
                    "d": "20-MAR-2009",
                    "p": 2807.05
                },
                {
                    "d": "23-MAR-2009",
                    "p": 2939.9
                },
                {
                    "d": "24-MAR-2009",
                    "p": 2938.7
                },
                {
                    "d": "25-MAR-2009",
                    "p": 2984.35
                },
                {
                    "d": "26-MAR-2009",
                    "p": 3082.25
                },
                {
                    "d": "27-MAR-2009",
                    "p": 3108.65
                },
                {
                    "d": "30-MAR-2009",
                    "p": 2978.15
                },
                {
                    "d": "31-MAR-2009",
                    "p": 3020.95
                },
                {
                    "d": "01-APR-2009",
                    "p": 3060.35
                },
                {
                    "d": "02-APR-2009",
                    "p": 3211.05
                },
                {
                    "d": "06-APR-2009",
                    "p": 3256.6
                },
                {
                    "d": "08-APR-2009",
                    "p": 3342.95
                },
                {
                    "d": "09-APR-2009",
                    "p": 3342.05
                },
                {
                    "d": "13-APR-2009",
                    "p": 3382.6
                },
                {
                    "d": "15-APR-2009",
                    "p": 3484.15
                },
                {
                    "d": "16-APR-2009",
                    "p": 3369.5
                },
                {
                    "d": "17-APR-2009",
                    "p": 3384.4
                },
                {
                    "d": "20-APR-2009",
                    "p": 3377.1
                },
                {
                    "d": "21-APR-2009",
                    "p": 3365.3
                },
                {
                    "d": "22-APR-2009",
                    "p": 3330.3
                },
                {
                    "d": "23-APR-2009",
                    "p": 3423.7
                },
                {
                    "d": "24-APR-2009",
                    "p": 3480.75
                },
                {
                    "d": "27-APR-2009",
                    "p": 3470.0
                },
                {
                    "d": "28-APR-2009",
                    "p": 3362.35
                },
                {
                    "d": "29-APR-2009",
                    "p": 3473.95
                },
                {
                    "d": "04-MAY-2009",
                    "p": 3654.0
                },
                {
                    "d": "05-MAY-2009",
                    "p": 3661.9
                },
                {
                    "d": "06-MAY-2009",
                    "p": 3625.05
                },
                {
                    "d": "07-MAY-2009",
                    "p": 3683.9
                },
                {
                    "d": "08-MAY-2009",
                    "p": 3620.7
                },
                {
                    "d": "11-MAY-2009",
                    "p": 3554.6
                },
                {
                    "d": "12-MAY-2009",
                    "p": 3681.1
                },
                {
                    "d": "13-MAY-2009",
                    "p": 3635.25
                },
                {
                    "d": "14-MAY-2009",
                    "p": 3593.45
                },
                {
                    "d": "15-MAY-2009",
                    "p": 3671.65
                },
                {
                    "d": "18-MAY-2009",
                    "p": 4323.15,
                    "n": "UPA Wins Elections: Sensex hits Upper Circuit"
                },
                {
                    "d": "19-MAY-2009",
                    "p": 4318.45
                },
                {
                    "d": "20-MAY-2009",
                    "p": 4270.3
                },
                {
                    "d": "21-MAY-2009",
                    "p": 4210.9
                },
                {
                    "d": "22-MAY-2009",
                    "p": 4238.5
                },
                {
                    "d": "25-MAY-2009",
                    "p": 4237.55
                },
                {
                    "d": "26-MAY-2009",
                    "p": 4116.7
                },
                {
                    "d": "27-MAY-2009",
                    "p": 4276.05
                },
                {
                    "d": "28-MAY-2009",
                    "p": 4337.1
                },
                {
                    "d": "29-MAY-2009",
                    "p": 4448.95
                },
                {
                    "d": "01-JUN-2009",
                    "p": 4529.9
                },
                {
                    "d": "02-JUN-2009",
                    "p": 4525.25
                },
                {
                    "d": "03-JUN-2009",
                    "p": 4530.7
                },
                {
                    "d": "04-JUN-2009",
                    "p": 4572.65
                },
                {
                    "d": "05-JUN-2009",
                    "p": 4586.9
                },
                {
                    "d": "08-JUN-2009",
                    "p": 4429.9
                },
                {
                    "d": "09-JUN-2009",
                    "p": 4550.95
                },
                {
                    "d": "10-JUN-2009",
                    "p": 4655.25
                },
                {
                    "d": "11-JUN-2009",
                    "p": 4637.7
                },
                {
                    "d": "12-JUN-2009",
                    "p": 4583.4
                },
                {
                    "d": "15-JUN-2009",
                    "p": 4484.0
                },
                {
                    "d": "16-JUN-2009",
                    "p": 4517.8
                },
                {
                    "d": "17-JUN-2009",
                    "p": 4356.15
                },
                {
                    "d": "18-JUN-2009",
                    "p": 4251.4
                },
                {
                    "d": "19-JUN-2009",
                    "p": 4313.6
                },
                {
                    "d": "22-JUN-2009",
                    "p": 4235.25
                },
                {
                    "d": "23-JUN-2009",
                    "p": 4247.0
                },
                {
                    "d": "24-JUN-2009",
                    "p": 4292.95
                },
                {
                    "d": "25-JUN-2009",
                    "p": 4241.85
                },
                {
                    "d": "26-JUN-2009",
                    "p": 4375.5
                },
                {
                    "d": "29-JUN-2009",
                    "p": 4390.95
                },
                {
                    "d": "30-JUN-2009",
                    "p": 4291.1
                },
                {
                    "d": "01-JUL-2009",
                    "p": 4340.9
                },
                {
                    "d": "02-JUL-2009",
                    "p": 4348.85
                },
                {
                    "d": "03-JUL-2009",
                    "p": 4424.25
                },
                {
                    "d": "06-JUL-2009",
                    "p": 4165.7
                },
                {
                    "d": "07-JUL-2009",
                    "p": 4202.15
                },
                {
                    "d": "08-JUL-2009",
                    "p": 4078.9
                },
                {
                    "d": "09-JUL-2009",
                    "p": 4080.95
                },
                {
                    "d": "10-JUL-2009",
                    "p": 4003.9,
                    "n": "Recovery Phase"
                }
            ]
        }
    ],
    generateCandles: (data) => {
        const candles = [];
        for (let i = 0; i < data.length; i++) {
            const p = data[i].p;
            const prev_p = i === 0 ? p : data[i - 1].p;
            
            const open = prev_p;
            const close = p;
            const diff = Math.abs(close - open);
            
            const dateStr = data[i].d || "";
            let seed = 0;
            for (let j = 0; j < dateStr.length; j++) {
                seed += dateStr.charCodeAt(j);
            }
            const randVal1 = Math.abs(Math.sin(seed + p)) * 0.8;
            const randVal2 = Math.abs(Math.cos(seed + p)) * 0.8;
            
            const vol = Math.max(diff * 0.15, p * 0.005);
            const high = Math.max(open, close) + randVal1 * vol;
            const low = Math.min(open, close) - randVal2 * vol;
            
            candles.push({ o: open, h: high, l: low, c: close });
        }
        return candles;
    },
    init: () => {
        const ctx = document.getElementById('tradingChart').getContext('2d');
        if (sim.chart) sim.chart.destroy();

        // RANDOM SELECTION
        const randomIndex = Math.floor(Math.random() * sim.scenarios.length);
        sim.currentScenario = sim.scenarios[randomIndex];

        // Pre-generate candles for the current scenario
        sim.currentScenario.candles = sim.generateCandles(sim.currentScenario.data);

        // Update UI based on Scenario
        document.querySelector('[data-i18n="sim-context-title"]').innerText = sim.currentScenario.contextTitle;
        document.querySelector('[data-i18n="sim-context-desc"]').innerHTML = sim.currentScenario.contextDesc;

        // Update Panic Modal Labels to be dynamic
        document.querySelector('[data-i18n="sim-panic-title"]').innerText = sim.currentScenario.panicTitle;
        document.querySelector('[data-i18n="sim-panic-subtitle"]').innerText = sim.currentScenario.panicSubtitle;


        sim.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Nifty 50 Index',
                    data: [],
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    pointRadius: 0,
                    fill: false,
                    tension: 0.2,
                    candlestick: true,
                    candles: []
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                plugins: { 
                    legend: { display: false }, 
                    tooltip: { 
                        mode: 'index', 
                        intersect: false,
                        callbacks: {
                            label: (context) => {
                                const dataset = context.dataset;
                                const index = context.dataIndex;
                                const candle = dataset.candles ? dataset.candles[index] : null;
                                if (candle) {
                                    return [
                                        `Close: ₹${Math.round(candle.c).toLocaleString()}`,
                                        `Open: ₹${Math.round(candle.o).toLocaleString()}`,
                                        `High: ₹${Math.round(candle.h).toLocaleString()}`,
                                        `Low: ₹${Math.round(candle.l).toLocaleString()}`
                                    ];
                                }
                                return `Price: ₹${Math.round(context.raw).toLocaleString()}`;
                            }
                        }
                    } 
                },
                scales: {
                    x: { grid: { display: false }, ticks: { maxTicksLimit: 6 } },
                    y: { grid: { borderDash: [5, 5], color: '#e2e8f0' }, beginAtZero: false }
                }
            },
            plugins: [candlestickPlugin]
        });

        sim.idx = 0; sim.invested = 0; sim.val = 0; sim.units = 0; sim.decided = false;
        sim.tick = sim.standardTick; // Ensure standard tick is restored

        const retryBtn = document.getElementById('sim-retry-btn');
        if (retryBtn) retryBtn.classList.add('hidden');

        document.getElementById('start-sim-btn').disabled = false;
        document.getElementById('start-sim-btn').innerHTML = "▶ ENTER SIMULATION";
        document.getElementById('portfolio-val').innerText = "₹0";
        document.getElementById('invested-val').innerText = "₹0";
        document.getElementById('news-text').innerText = i18n.t("sim-init");
    },
    resume: () => {
        document.getElementById('panic-modal').classList.add('hidden');
        sim.interval = setInterval(sim.tick, 800);
    },
    start: () => {
        const btn = document.getElementById('start-sim-btn');
        btn.disabled = true;
        btn.innerHTML = "Simulating...";
        // Use a faster tick for 2008 data because it has 240 points vs COVID's 20 points
        // COVID data is yearly/monthly (sparse), 2008 data is daily (dense).
        // COVID: Faster (400ms instead of 800ms) | 2008: Slower (120ms instead of 50ms)
        const speed = sim.currentScenario.id === '2008' ? 120 : 400;
        sim.interval = setInterval(sim.tick, speed);
    },
    tick: null, // Will be set in init
    standardTick: () => {
        // Use sim.currentScenario.data instead of sim.data
        const data = sim.currentScenario.data;
        const isDaily = sim.currentScenario.id === '2008';

        if (sim.idx >= data.length) { sim.finish(true); return; }
        const pt = data[sim.idx];

        // Draw first so user sees the drop/movement
        const lastLabel = sim.chart.data.labels[sim.chart.data.labels.length - 1];
        if (lastLabel !== pt.d) {
            sim.chart.data.labels.push(pt.d);
            sim.chart.data.datasets[0].data.push(pt.p);
            // Push corresponding candle
            const candle = sim.currentScenario.candles[sim.idx];
            sim.chart.data.datasets[0].candles.push(candle);
            // Update chart less frequently for daily data to improve performance
            if (!isDaily || sim.idx % 5 === 0 || pt.n || pt.panic) {
                sim.chart.update();
            }
        }

        if (pt.panic && !sim.decided) {
            clearInterval(sim.interval);
            // Force update to show the drop
            sim.chart.update();
            setTimeout(() => {
                document.getElementById('panic-modal').classList.remove('hidden');
            }, 500);
            return;
        }

        // SIP Logic: Even for daily data, we simulate monthly SIP?
        // Or just drip feed? 
        // For COVID (Monthly/Yearly data): SIP added every tick.
        // For 2008 (Daily data): SIP every tick seems wrong (200 * 5000 = 10Lakhs).
        // We should only add SIP once every ~20 ticks (monthly).

        let addSip = true;
        if (isDaily) {
            // Primitive check: only add if date changes month? 
            // Or just simplified: Add SIP every 20 trading days.
            if (sim.idx % 20 !== 0) addSip = false;
        }

        if (addSip) {
            const units = sim.sip / pt.p;
            sim.units += units;
            sim.invested += sim.sip;
        }

        // Value is always current units * current price
        sim.val = sim.units * pt.p;

        document.getElementById('portfolio-val').innerText = `₹${Math.round(sim.val).toLocaleString()}`;
        const elInv = document.getElementById('invested-val');
        if (elInv) elInv.innerText = `₹${Math.round(sim.invested).toLocaleString()}`;
        if (pt.n) document.getElementById('news-text').innerText = pt.n;
        sim.idx++;
    },
    decision: (choice) => {
        document.getElementById('panic-modal').classList.add('hidden');
        sim.decided = true;
        const data = sim.currentScenario.data;
        const speed = sim.currentScenario.id === '2008' ? 120 : 400;

        if (choice === 'sell') {
            const locked = sim.val; sim.units = 0;
            sim.tick = () => {
                if (sim.idx >= data.length) { sim.finish(false, locked); return; }
                const pt = data[sim.idx];
                sim.chart.data.labels.push(pt.d);
                sim.chart.data.datasets[0].data.push(pt.p);
                // Push corresponding candle
                const candle = sim.currentScenario.candles[sim.idx];
                sim.chart.data.datasets[0].candles.push(candle);
                sim.chart.data.datasets[0].borderColor = '#94a3b8'; // gray out
                sim.chart.data.datasets[0].backgroundColor = 'transparent';
                if (sim.idx % 5 === 0 || pt.n) sim.chart.update();

                document.getElementById('news-text').innerText = pt.n || "Market recovering...";
                sim.idx++;
            };
            sim.interval = setInterval(sim.tick, speed / 2); // 2x speed for recovery viewing
        } else {
            if (!state.simAwards.decision) {
                state.behaviorScore += 15;
                state.simAwards.decision = true;
            }
            sim.interval = setInterval(sim.tick, speed);
        }
    },
    retry: () => {
        document.getElementById('result-modal').classList.add('hidden');
        sim.init();
        window.scrollTo(0, 0);
    },
    finish: (held, locked = 0) => {
        clearInterval(sim.interval);
        state.simCompleted = true;
        storage.save();

        document.getElementById('result-modal').classList.remove('hidden');

        const fv = held ? sim.val : locked;
        document.getElementById('res-val').innerText = `₹${Math.round(fv).toLocaleString()}`;

        const modal = document.getElementById('res-modal-content');
        const title = document.getElementById('res-title');
        const msg = document.getElementById('res-msg');
        const icon = document.getElementById('res-icon');
        const btn = document.getElementById('sim-finish-btn');

        btn.innerText = "Continue to De-brief";
        btn.onclick = () => {
            document.getElementById('result-modal').classList.add('hidden');
            app.startModule(4);
        };

        const potWrapper = document.getElementById('res-potential-wrapper');
        const potVal = document.getElementById('res-potential-val');
        const oppWrapper = document.getElementById('res-opp-cost-wrapper');
        const oppVal = document.getElementById('res-opp-cost-val');

        if (held) {
            // SUCCESS
            if (potWrapper) potWrapper.classList.add('hidden');
            if (oppWrapper) oppWrapper.classList.add('hidden');
            modal.style.borderTopColor = "var(--primary)";
            title.innerText = "Simulation Complete";
            title.style.color = "var(--primary)";
            if (icon) icon.innerText = "✅";
            msg.innerHTML = "<strong>Excellent!</strong> By staying invested, you allowed the market recovery to multiply your wealth. Volatility is the price of admission for long-term wealth.";
            if (!state.simAwards.finish) {
                state.behaviorScore += 10;
                state.simAwards.finish = true;
            }
        } else {
            // SOLD (FAILURE)
            let perfectUnits = 0;
            const data = sim.currentScenario.data;
            const isDaily = sim.currentScenario.id === '2008';

            data.forEach((pt, i) => {
                let add = true;
                if (isDaily && i % 20 !== 0) add = false;
                if (add) perfectUnits += (sim.sip / pt.p);
            });

            const outcomePotential = perfectUnits * data[data.length - 1].p;
            const outcomeDiff = outcomePotential - locked;

            if (potWrapper) {
                potWrapper.classList.remove('hidden');
                potVal.innerText = `₹${Math.round(outcomePotential).toLocaleString()}`;
            }
            if (oppWrapper) {
                oppWrapper.classList.remove('hidden');
                oppVal.innerText = `₹${Math.round(outcomeDiff).toLocaleString()}`;
            }

            modal.style.borderTopColor = "var(--danger)";
            title.innerText = "Opportunity Cost";
            title.style.color = "var(--danger)";
            if (icon) icon.innerText = "❌";
            msg.innerHTML = `<strong>Lesson Learned:</strong> You saved your cash in the short term, but you missed the recovery. You lost ₹${Math.round(outcomeDiff).toLocaleString()} in potential gains.`;

            if (document.getElementById('sim-retry-btn')) document.getElementById('sim-retry-btn').classList.remove('hidden');
        }
    }
};
// ==========================================
// FLASHBACK TRADING - COMPLETE SYSTEM
// ==========================================

const fbData = {
    "Nifty": [21725, 21982, 22326, 22604, 22530, 24010, 24951, 25235, 25810, 24205, 24131, 23644, 23508, 22124, 22327, 22607, 23075, 24608, 25340, 25488, 25774, 25377, 26202, 26262],
    "Bank": [45996, 46120, 47124, 49396, 48983, 52342, 51553, 51351, 52978, 51475, 51906, 50669, 50877, 48398, 49133, 50059, 51633, 55077, 56930, 57118, 57924, 57270, 59752, 59987],
    "Auto": [19934, 20586, 21338, 22295, 22927, 25199, 25740, 25883, 26490, 22915, 23376, 23363, 23212, 22485, 22987, 23485, 24392, 26038, 26868, 26970, 27265, 26798, 27774, 27838],
    "Fin": [20438, 20316, 20996, 21857, 21535, 23447, 23727, 23927, 24647, 24021, 23992, 23377, 23455, 22312, 22652, 23072, 23793, 25375, 26233, 26315, 26693, 26422, 27890, 28004],
    "FMCG": [55197, 53975, 53915, 54257, 55390, 56253, 60515, 63443, 63334, 59419, 58319, 56507, 55502, 52627, 52331, 52206, 52250, 54407, 55663, 55767, 55928, 54930, 55595, 55180],
    "IT": [36623, 37720, 34842, 33237, 32283, 36473, 39433, 42299, 42922, 40498, 43913, 42525, 41539, 38173, 37622, 37170, 36980, 38384, 38947, 38896, 39077, 38332, 37405, 37732],
    "Metal": [7899, 7927, 8263, 9172, 9673, 9673, 9566, 9239, 9779, 9220, 9226, 9400, 9770, 9515, 9713, 9979, 10398, 11332, 11843, 12022, 12273, 11723, 10293, 10472],
    "Midcap": [48263, 48335, 48075, 50868, 51119, 55784, 58249, 58947, 60232, 56112, 56499, 55955, 55299, 52674, 53282, 54030, 55293, 58529, 59918, 59997, 60467, 59267, 61043, 60882],
    "Pharma": [18584, 19084, 19139, 19069, 19131, 20436, 22625, 23157, 23418, 22372, 22359, 21834, 21676, 20993, 21332, 21763, 22170, 23079, 23602, 23706, 23927, 23377, 22998, 23145],
    "Smallcap": [16340, 15895, 15263, 16898, 16657, 18238, 19208, 19248, 19349, 17878, 18274, 18320, 17972, 17096, 17181, 17293, 17562, 18318, 18749, 18777, 18880, 18375, 17829, 17658]
};

const fbDates = ["Jan 24", "Feb 24", "Mar 24", "Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24", "Oct 24", "Nov 24", "Dec 24", "Jan 25", "Feb 25", "Mar 25", "Apr 25", "May 25", "Jun 25", "Jul 25", "Aug 25", "Sep 25", "Oct 25", "Nov 25", "Dec 25"];
const fbSectors = ["Nifty", "Bank", "Auto", "Fin", "FMCG", "IT", "Metal", "Midcap", "Pharma", "Smallcap"];

let userAllocation = {};
fbSectors.forEach(s => userAllocation[s] = 0);

// --- MODERN MOCK TRADING TERMINAL ENGINE ---
const dailyMarketData = {};
const dailyDates = [];

const sectorToFileMap = {
    "Nifty": "NIFTY 50.csv",
    "Bank": "NIFTY BANK.csv",
    "Auto": "NIFTY AUTO.csv",
    "Fin": "NIFTY FINANCIAL SERVICES.csv",
    "FMCG": "NIFTY FMCG.csv",
    "IT": "NIFTY IT.csv",
    "Metal": "NIFTY METAL.csv",
    "Midcap": "NIFTY MIDCAP 100.csv",
    "Pharma": "NIFTY PHARMA.csv",
    "Smallcap": "NIFTY SMALLCAP 100.csv"
};

const formatCsvDate = (dateStr) => {
    if (!dateStr) return "";
    const parts = dateStr.trim().split('-');
    if (parts.length === 3) {
        const day = parts[0];
        const month = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
        const year = parts[2];
        return `${day} ${month} '${year}`;
    }
    return dateStr.trim();
};

const loadDailyNSEData = async () => {
    // Clear and reset dailyMarketData and dailyDates arrays
    fbSectors.forEach(sector => {
        dailyMarketData[sector] = {
            prices: [],
            candles: []
        };
    });
    dailyDates.length = 0;

    // Load and parse all 10 sector CSV files concurrently
    const loadPromises = fbSectors.map(async (sector) => {
        const filename = sectorToFileMap[sector];
        const response = await fetch(`assets/data/${filename}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filename}`);
        }
        const text = await response.text();
        const lines = text.split(/\r?\n/);
        if (lines.length === 0) return;

        // Parse CSV headers and find exact column indices (case-insensitive & trimmed)
        const headerCells = lines[0].split(',').map(h => h.trim().toLowerCase());
        const colIndices = {
            date: headerCells.indexOf('date'),
            open: headerCells.indexOf('open'),
            high: headerCells.indexOf('high'),
            low: headerCells.indexOf('low'),
            close: headerCells.indexOf('close')
        };

        // Fallbacks if any headers have non-standard names
        if (colIndices.date === -1) colIndices.date = 0;
        if (colIndices.open === -1) colIndices.open = 1;
        if (colIndices.high === -1) colIndices.high = 2;
        if (colIndices.low === -1) colIndices.low = 3;
        if (colIndices.close === -1) colIndices.close = 4;

        const parsedRows = [];
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
            const cells = line.split(',');
            if (cells.length < 5) continue;

            const dateVal = cells[colIndices.date] ? cells[colIndices.date].trim() : "";
            const openVal = parseFloat(cells[colIndices.open]);
            const highVal = parseFloat(cells[colIndices.high]);
            const lowVal = parseFloat(cells[colIndices.low]);
            const closeVal = parseFloat(cells[colIndices.close]);

            if (isNaN(openVal) || isNaN(highVal) || isNaN(lowVal) || isNaN(closeVal)) {
                continue;
            }

            parsedRows.push({
                date: dateVal,
                o: openVal,
                h: highVal,
                l: lowVal,
                c: closeVal
            });
        }

        // Store close prices and OHLC candle objects chronologically
        parsedRows.forEach(row => {
            dailyMarketData[sector].prices.push(row.c);
            dailyMarketData[sector].candles.push({
                o: row.o,
                h: row.h,
                l: row.l,
                c: row.c
            });
        });

        // Use the Nifty 50 date mapping as the master timeline
        if (sector === "Nifty") {
            parsedRows.forEach(row => {
                dailyDates.push(formatCsvDate(row.date));
            });
        }
    });

    await Promise.all(loadPromises);

    // Padding safety check to ensure identical lengths in case of any data mismatches
    fbSectors.forEach(sector => {
        const sectorData = dailyMarketData[sector];
        const targetLen = dailyDates.length;
        while (sectorData.prices.length < targetLen) {
            const lastIdx = sectorData.prices.length - 1;
            if (lastIdx >= 0) {
                sectorData.prices.push(sectorData.prices[lastIdx]);
                sectorData.candles.push({ ...sectorData.candles[lastIdx] });
            } else {
                sectorData.prices.push(0);
                sectorData.candles.push({ o: 0, h: 0, l: 0, c: 0 });
            }
        }
    });
};

const flashbackSim = {
    chart: null,
    interval: null,
    isPlaying: false,
    
    // Core Simulator State
    dayIdx: 0,
    activeTab: "dashboard", // 'dashboard' or 'markets' or 'detail'
    activeSector: "Nifty",
    
    cash: 100000,
    holdings: {},      // { Nifty: units, ... }
    avgCost: {},       // { Nifty: avg_purchase_price, ... }
    triggers: {},      // { Nifty: { sl: null, tgt: null }, ... }
    history: [],       // [{ d: date, val: portfolio_value }]
    alerts: [],        // [{ type: 'info|success|danger', text: msg, date: dLabel }]

    start: async () => {
        // Prepare daily data asynchronously from real NSE CSVs
        await loadDailyNSEData();
        
        // Reset State
        flashbackSim.dayIdx = 0;
        flashbackSim.activeTab = "dashboard";
        flashbackSim.activeSector = "Nifty";
        flashbackSim.isPlaying = false;
        if (flashbackSim.interval) {
            clearInterval(flashbackSim.interval);
            flashbackSim.interval = null;
        }

        flashbackSim.cash = 100000;
        flashbackSim.holdings = {};
        flashbackSim.avgCost = {};
        flashbackSim.triggers = {};
        flashbackSim.history = [];
        flashbackSim.alerts = [];

        fbSectors.forEach(s => {
            flashbackSim.holdings[s] = 0;
            flashbackSim.avgCost[s] = 0;
            flashbackSim.triggers[s] = { sl: null, tgt: null };
        });

        // Seed first day history
        flashbackSim.history.push({ d: dailyDates[0], val: 100000 });
        flashbackSim.alerts.push({ type: 'info', text: "Mock Trading Simulator active! ₹1,00,000 cash balance available.", date: dailyDates[0] });

        app.showScreen('sim-section');
        
        // Render UI
        flashbackSim.initChart();
        flashbackSim.renderActive();
        
        // Reset play button state
        const playBtn = document.getElementById('btn-fb-play');
        if (playBtn) playBtn.innerHTML = "▶ Play";
    },

    togglePlay: () => {
        const btn = document.getElementById('btn-fb-play');
        if (flashbackSim.isPlaying) {
            clearInterval(flashbackSim.interval);
            flashbackSim.isPlaying = false;
            if (btn) btn.innerHTML = "▶ Play";
        } else {
            flashbackSim.isPlaying = true;
            if (btn) btn.innerHTML = "⏸ Pause";
            flashbackSim.interval = setInterval(flashbackSim.tick, 800);
        }
    },

    skip: (type) => {
        // Pause ticking
        if (flashbackSim.isPlaying) {
            flashbackSim.togglePlay();
        }

        let daysToSkip = 5; // week
        if (type === 'month') daysToSkip = 20;
        else if (type === 'year') daysToSkip = 240;

        // Skip day by day sequentially to let triggers execute correctly
        for (let i = 0; i < daysToSkip; i++) {
            if (flashbackSim.dayIdx >= dailyDates.length) break;
            flashbackSim.tick(true); // tick silently (no render)
        }

        // Render once at end
        flashbackSim.renderActive();
    },

    tick: (silent = false) => {
        if (flashbackSim.dayIdx >= dailyDates.length) {
            flashbackSim.finish();
            return;
        }

        const todayDate = dailyDates[flashbackSim.dayIdx];

        // 1. Process Triggers (Stop-Loss and Target Profit)
        fbSectors.forEach(sector => {
            const unitsOwned = flashbackSim.holdings[sector] || 0;
            if (unitsOwned > 0) {
                const currentPrice = dailyMarketData[sector].prices[flashbackSim.dayIdx];
                const avgPrice = flashbackSim.avgCost[sector];
                const pctChange = ((currentPrice - avgPrice) / avgPrice) * 100;
                
                const sl = flashbackSim.triggers[sector].sl;
                const tgt = flashbackSim.triggers[sector].tgt;

                if (sl !== null && pctChange <= -sl) {
                    // Auto-sell Stop-Loss
                    const sellVal = unitsOwned * currentPrice;
                    flashbackSim.cash += sellVal;
                    flashbackSim.holdings[sector] = 0;
                    flashbackSim.avgCost[sector] = 0;
                    flashbackSim.triggers[sector] = { sl: null, tgt: null };
                    
                    flashbackSim.alerts.unshift({
                        type: 'danger',
                        text: `🚨 STOP LOSS TRIGGERED: ${sector} index auto-sold at ${pctChange.toFixed(1)}% loss (₹${Math.round(sellVal).toLocaleString()} returned to cash).`,
                        date: todayDate
                    });
                } else if (tgt !== null && pctChange >= tgt) {
                    // Auto-sell Profit Target
                    const sellVal = unitsOwned * currentPrice;
                    flashbackSim.cash += sellVal;
                    flashbackSim.holdings[sector] = 0;
                    flashbackSim.avgCost[sector] = 0;
                    flashbackSim.triggers[sector] = { sl: null, tgt: null };

                    flashbackSim.alerts.unshift({
                        type: 'success',
                        text: `🚀 TARGET HIT: ${sector} index auto-sold at ${pctChange.toFixed(1)}% profit (₹${Math.round(sellVal).toLocaleString()} returned to cash).`,
                        date: todayDate
                    });
                }
            }
        });

        // 2. Calculate Portfolio Cumulative Value
        let portfolioVal = flashbackSim.cash;
        fbSectors.forEach(sector => {
            const unitsOwned = flashbackSim.holdings[sector] || 0;
            const currentPrice = dailyMarketData[sector].prices[flashbackSim.dayIdx];
            portfolioVal += unitsOwned * currentPrice;
        });

        // 3. Save History
        flashbackSim.history.push({ d: todayDate, val: portfolioVal });

        // 4. End Condition Check
        if (flashbackSim.dayIdx === dailyDates.length - 1) {
            flashbackSim.finish();
            return;
        }

        // Increment Day
        flashbackSim.dayIdx++;

        // 5. Update UI
        if (!silent) {
            flashbackSim.renderActive();
        }
    },

    initChart: () => {
        const ctx = document.getElementById('fbChart').getContext('2d');
        if (flashbackSim.chart) flashbackSim.chart.destroy();
        
        flashbackSim.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    { 
                        label: 'Portfolio Value', 
                        data: [], 
                        borderColor: '#5367FF', 
                        backgroundColor: 'rgba(83, 103, 255, 0.05)', 
                        borderWidth: 2, 
                        tension: 0.2, 
                        fill: true,
                        pointRadius: 0
                    },
                    {
                        label: 'Market Index',
                        data: [],
                        borderColor: 'transparent',
                        backgroundColor: 'transparent',
                        borderWidth: 0,
                        tension: 0.2,
                        fill: false,
                        pointRadius: 0,
                        candlestick: true,
                        candles: []
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: (context) => {
                                const dataset = context.dataset;
                                const index = context.dataIndex;
                                if (dataset.candlestick) {
                                    const candle = dataset.candles ? dataset.candles[index] : null;
                                    if (candle) {
                                        return [
                                            `${dataset.label} (Close): ₹${Math.round(candle.c).toLocaleString()}`,
                                            `${dataset.label} (Open): ₹${Math.round(candle.o).toLocaleString()}`,
                                            `${dataset.label} (High): ₹${Math.round(candle.h).toLocaleString()}`,
                                            `${dataset.label} (Low): ₹${Math.round(candle.l).toLocaleString()}`
                                        ];
                                    }
                                }
                                return `${dataset.label}: ₹${Math.round(context.raw).toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    x: { grid: { display: false }, ticks: { maxTicksLimit: 6 } },
                    y: { grid: { borderDash: [5, 5], color: '#e2e8f0' }, ticks: { callback: v => '₹' + v.toLocaleString() } }
                }
            },
            plugins: [candlestickPlugin]
        });
    },

    switchTab: (tabName) => {
        flashbackSim.activeTab = tabName;
        
        // Update header tab active states
        const dashBtn = document.getElementById('tab-fb-dash');
        const marketsBtn = document.getElementById('tab-fb-markets');
        if (dashBtn && marketsBtn) {
            if (tabName === 'dashboard') {
                dashBtn.style.color = "var(--primary)";
                dashBtn.style.borderBottom = "3px solid var(--primary)";
                marketsBtn.style.color = "var(--text-muted)";
                marketsBtn.style.borderBottom = "none";
            } else if (tabName === 'markets') {
                marketsBtn.style.color = "var(--primary)";
                marketsBtn.style.borderBottom = "3px solid var(--primary)";
                dashBtn.style.color = "var(--text-muted)";
                dashBtn.style.borderBottom = "none";
            } else {
                // Detail screen
                dashBtn.style.color = "var(--text-muted)";
                dashBtn.style.borderBottom = "none";
                marketsBtn.style.color = "var(--text-muted)";
                marketsBtn.style.borderBottom = "none";
            }
        }

        flashbackSim.renderActive();
    },

    openDetail: (sector) => {
        flashbackSim.activeSector = sector;
        flashbackSim.switchTab('detail');
    },

    executeBuy: () => {
        const amtEl = document.getElementById('trade-amount');
        if (!amtEl) return;
        const amount = parseFloat(amtEl.value);
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount to buy.");
            return;
        }

        if (amount > flashbackSim.cash) {
            alert("Insufficient cash balance.");
            return;
        }

        const sector = flashbackSim.activeSector;
        const currentPrice = dailyMarketData[sector].prices[flashbackSim.dayIdx];
        const units = amount / currentPrice;
        
        const currentUnits = flashbackSim.holdings[sector] || 0;
        const currentAvg = flashbackSim.avgCost[sector] || 0;
        
        const newUnits = currentUnits + units;
        const newAvg = (currentUnits * currentAvg + amount) / newUnits;

        flashbackSim.holdings[sector] = newUnits;
        flashbackSim.avgCost[sector] = newAvg;
        flashbackSim.cash -= amount;

        flashbackSim.alerts.unshift({
            type: 'info',
            text: `🛒 PURCHASE EXECUTION: Bought ₹${amount.toLocaleString()} worth of ${sector} Index at ₹${Math.round(currentPrice).toLocaleString()} per unit.`,
            date: dailyDates[flashbackSim.dayIdx]
        });

        amtEl.value = "";
        flashbackSim.renderActive();
    },

    executeSellAll: () => {
        const sector = flashbackSim.activeSector;
        const unitsOwned = flashbackSim.holdings[sector] || 0;
        if (unitsOwned <= 0) {
            alert("You don't own any holdings in this Index.");
            return;
        }

        const currentPrice = dailyMarketData[sector].prices[flashbackSim.dayIdx];
        const sellVal = unitsOwned * currentPrice;
        const avgPrice = flashbackSim.avgCost[sector];
        const pctGain = ((currentPrice - avgPrice) / avgPrice) * 100;

        flashbackSim.cash += sellVal;
        flashbackSim.holdings[sector] = 0;
        flashbackSim.avgCost[sector] = 0;
        flashbackSim.triggers[sector] = { sl: null, tgt: null };

        flashbackSim.alerts.unshift({
            type: pctGain >= 0 ? 'success' : 'danger',
            text: `💸 LIQUIDATION EXECUTION: Fully liquidated ${sector} Index for ₹${Math.round(sellVal).toLocaleString()} (${pctGain >= 0 ? '+' : ''}${pctGain.toFixed(1)}% return).`,
            date: dailyDates[flashbackSim.dayIdx]
        });

        flashbackSim.renderActive();
    },

    executeSetTriggers: () => {
        const sector = flashbackSim.activeSector;
        const slEl = document.getElementById('trade-sl');
        const tgtEl = document.getElementById('trade-tgt');
        if (!slEl || !tgtEl) return;

        const slVal = slEl.value ? parseFloat(slEl.value) : null;
        const tgtVal = tgtEl.value ? parseFloat(tgtEl.value) : null;

        if (slVal !== null && (slVal <= 0 || slVal >= 100)) {
            alert("Stop Loss must be a percentage between 1% and 99%.");
            return;
        }
        if (tgtVal !== null && tgtVal <= 0) {
            alert("Profit Target must be a positive percentage.");
            return;
        }

        flashbackSim.triggers[sector] = { sl: slVal, tgt: tgtVal };

        flashbackSim.alerts.unshift({
            type: 'info',
            text: `⚙️ TRIGGERS UPDATED: ${sector} index auto-sell triggers configured. (SL: ${slVal ? slVal+'%' : 'None'} | Target: ${tgtVal ? tgtVal+'%' : 'None'})`,
            date: dailyDates[flashbackSim.dayIdx]
        });

        flashbackSim.renderActive();
    },

    renderActive: () => {
        const todayDate = dailyDates[flashbackSim.dayIdx];

        // Update Holdings count badge dynamically in the tab headers
        let activeHoldingsCount = 0;
        fbSectors.forEach(sector => {
            if ((flashbackSim.holdings[sector] || 0) > 0) activeHoldingsCount++;
        });
        const badgeEl = document.getElementById('fb-holdings-count');
        if (badgeEl) badgeEl.innerText = activeHoldingsCount;

        // Toggle visibility and heights of Chart Box and Alerts Box dynamically based on screen context
        const workspace = document.getElementById('fb-main-workspace');
        const leftPanel = document.getElementById('fb-left-panel');
        const rightPanel = document.getElementById('fb-right-panel');
        const chartBox = document.getElementById('fb-chart-box');
        const alertsBox = document.getElementById('fb-alerts-box');

        if (workspace && leftPanel && rightPanel && chartBox && alertsBox) {
            if (flashbackSim.activeTab === 'detail') {
                // 2-Column Side-by-Side Trading Layout: Form on left, Chart+Alerts on right
                workspace.style.display = "grid";
                workspace.style.gridTemplateColumns = "1fr 1.5fr";
                workspace.style.maxWidth = "none";
                workspace.style.margin = "0";
                workspace.style.minHeight = "620px";
                
                leftPanel.style.maxWidth = "none";
                leftPanel.style.width = "100%";
                leftPanel.style.margin = "0";

                rightPanel.style.width = "100%";

                chartBox.classList.remove('hidden');
                alertsBox.classList.remove('hidden');
                alertsBox.style.flex = '1';
                alertsBox.style.maxHeight = '180px';
                alertsBox.style.height = 'auto';
            } else {
                // Full-width 2-column grid: left=content, right=chart+alerts
                workspace.style.display = "grid";
                workspace.style.gridTemplateColumns = "1fr 420px";
                workspace.style.maxWidth = "none";
                workspace.style.margin = "0";
                workspace.style.gap = "1.5rem";
                workspace.style.minHeight = "560px";

                leftPanel.style.width = "100%";
                leftPanel.style.margin = "0";

                rightPanel.style.width = "100%";

                chartBox.classList.remove('hidden');
                chartBox.style.height = '340px';
                alertsBox.classList.remove('hidden');
                alertsBox.style.flex = '1';
                alertsBox.style.maxHeight = '220px';
                alertsBox.style.height = 'auto';
            }
        }

        // 1. Update Header Tickers
        const dateEl = document.getElementById('fb-sim-date');
        const cashEl = document.getElementById('fb-sim-cash');
        if (dateEl) dateEl.innerText = todayDate;
        if (cashEl) cashEl.innerText = `₹${Math.round(flashbackSim.cash).toLocaleString()}`;

        // 2. Render Tab Left Content
        const leftContainer = document.getElementById('fb-terminal-left-content');
        if (!leftContainer) return;

        if (flashbackSim.activeTab === 'dashboard') {
            // Calculate Zerodha Kite holdings stats
            let totalInvested = 0;
            let totalCurrent = 0;
            let itemsHtml = "";

            // Calculate Day's P&L variables
            let totalDayPrevValue = 0;
            let totalDayCurrentValue = 0;

            fbSectors.forEach(sector => {
                const qty = flashbackSim.holdings[sector] || 0;
                const price = dailyMarketData[sector].prices[flashbackSim.dayIdx];
                const prevPrice = flashbackSim.dayIdx === 0 ? price : dailyMarketData[sector].prices[flashbackSim.dayIdx - 1];

                if (qty > 0) {
                    const avg = flashbackSim.avgCost[sector];
                    const invested = qty * avg;
                    const currentVal = qty * price;
                    
                    totalInvested += invested;
                    totalCurrent += currentVal;

                    totalDayCurrentValue += currentVal;
                    totalDayPrevValue += qty * prevPrice;

                    const holdingPnlAbsolute = currentVal - invested;
                    const holdingPnlPct = ((price - avg) / avg) * 100;
                    const dayChangePct = ((price - prevPrice) / prevPrice) * 100;

                    const sl = flashbackSim.triggers[sector].sl;
                    const tgt = flashbackSim.triggers[sector].tgt;
                    const triggersStr = `${sl ? 'SL: -' + sl + '%' : ''} ${tgt ? 'Tgt: +' + tgt + '%' : ''}`.trim() || 'None';

                    itemsHtml += `
                        <div style="padding: 1.4rem 1rem; border-bottom: 1px solid rgba(0,0,0,0.06); font-family: 'Inter', sans-serif; border-radius: 12px; margin-bottom: 0.25rem; background: white; transition: background 0.15s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='white'">
                            <div class="flex justify-between items-center" style="margin-bottom: 0.5rem;">
                                <span style="font-weight: 800; font-size: 1.1rem; color: var(--primary); letter-spacing: -0.01em;">${sector.toUpperCase()} INDEX</span>
                                <span style="font-size: 1.05rem; font-weight: 800; color: ${holdingPnlAbsolute >= 0 ? '#22c55e' : '#ef4444'};">
                                    ${holdingPnlAbsolute >= 0 ? '+' : ''}₹${Math.round(holdingPnlAbsolute).toLocaleString()}
                                    <span style="font-size: 0.78rem; font-weight: 700; background: ${holdingPnlPct >= 0 ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)'}; color: ${holdingPnlPct >= 0 ? '#22c55e' : '#ef4444'}; padding: 2px 7px; border-radius: 50px; margin-left: 4px;">${holdingPnlPct >= 0 ? '+' : ''}${holdingPnlPct.toFixed(2)}%</span>
                                </span>
                            </div>
                            <div class="flex justify-between items-center" style="font-size: 0.83rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                                <div style="display: flex; gap: 1.25rem;">
                                    <span>Qty: <strong style="color: var(--text-main);">${qty.toFixed(4)}</strong></span>
                                    <span>Avg: <strong style="color: var(--text-main);">₹${Math.round(avg).toLocaleString()}</strong></span>
                                    <span>Invested: <strong style="color: #475569;">₹${Math.round(invested).toLocaleString()}</strong></span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center" style="font-size: 0.83rem;">
                                <div style="display: flex; gap: 1.25rem; color: var(--text-muted);">
                                    <span>LTP: <strong style="color: var(--text-main);">₹${Math.round(price).toLocaleString()}</strong></span>
                                    <span style="color: ${dayChangePct >= 0 ? '#22c55e' : '#ef4444'}; font-weight: 700;">${dayChangePct >= 0 ? '▲ +' : '▼ '}${dayChangePct.toFixed(2)}% today</span>
                                    ${triggersStr !== 'None' ? `<span style="color: #64748b; background: #f1f5f9; padding: 1px 6px; border-radius: 4px;">⚙️ ${triggersStr}</span>` : ''}
                                </div>
                                <button onclick="flashbackSim.openDetail('${sector}')" style="background: var(--primary); border: none; color: white; font-weight: 700; cursor: pointer; padding: 0.35rem 0.9rem; border-radius: 8px; font-size: 0.82rem; transition: opacity 0.15s;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">Trade →</button>
                            </div>
                        </div>
                    `;
                }
            });

            const totalPnlAbsolute = totalCurrent - totalInvested;
            const totalPnlPct = totalInvested > 0 ? (totalPnlAbsolute / totalInvested) * 100 : 0;

            const dayPnlAbsolute = totalDayCurrentValue - totalDayPrevValue;
            const dayPnlPct = totalDayPrevValue > 0 ? (dayPnlAbsolute / totalDayPrevValue) * 100 : 0;

            leftContainer.innerHTML = `
                <!-- Portfolio Summary Cards Row -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem; font-family: 'Inter', sans-serif;">
                    <div style="background: linear-gradient(135deg, #f8fafc, #eef2ff); border-radius: 14px; padding: 1.1rem 1.25rem; border: 1px solid #e0e7ff;">
                        <div style="font-size: 0.72rem; font-weight: 700; color: #6366f1; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.3rem;">Invested</div>
                        <div style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">₹${Math.round(totalInvested).toLocaleString()}</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #f8fafc, #f0fdf4); border-radius: 14px; padding: 1.1rem 1.25rem; border: 1px solid #bbf7d0;">
                        <div style="font-size: 0.72rem; font-weight: 700; color: #22c55e; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.3rem;">Current</div>
                        <div style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">₹${Math.round(totalCurrent).toLocaleString()}</div>
                    </div>
                    <div style="background: ${totalPnlAbsolute >= 0 ? 'linear-gradient(135deg, #f0fdf4, #dcfce7)' : 'linear-gradient(135deg, #fff5f5, #fee2e2)'}; border-radius: 14px; padding: 1.1rem 1.25rem; border: 1px solid ${totalPnlAbsolute >= 0 ? '#bbf7d0' : '#fecaca'};">
                        <div style="font-size: 0.72rem; font-weight: 700; color: ${totalPnlAbsolute >= 0 ? '#22c55e' : '#ef4444'}; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.3rem;">P&amp;L</div>
                        <div style="font-size: 1.4rem; font-weight: 800; color: ${totalPnlAbsolute >= 0 ? '#22c55e' : '#ef4444'};">₹${Math.round(Math.abs(totalPnlAbsolute)).toLocaleString()} <span style="font-size: 0.8rem; font-weight: 700;">${totalPnlAbsolute >= 0 ? '+' : '-'}${totalPnlPct.toFixed(2)}%</span></div>
                    </div>
                </div>

                <!-- Holdings column header row -->
                <div class="flex justify-between items-center" style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; padding: 0 1rem; margin-bottom: 0.4rem;">
                    <span>Holding</span>
                    <span>P&amp;L / Return</span>
                </div>

                <!-- Holdings List scroll area -->
                <div style="flex: 1; display: flex; flex-direction: column; overflow-y: auto;">
                    ${itemsHtml ? `
                        <div style="flex: 1;">
                            ${itemsHtml}
                        </div>
                        
                        <!-- Day's P&L Footer -->
                        <div style="background: var(--bg-soft); border: 1px solid var(--border); border-radius: 12px; padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; font-family: 'Inter', sans-serif;">
                            <span style="font-weight: 700; color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.03em;">Today's P&L</span>
                            <div class="flex items-center gap-2">
                                <span style="font-weight: 800; color: ${dayPnlAbsolute >= 0 ? '#22c55e' : '#ef4444'}; font-size: 1.15rem;">
                                    ${dayPnlAbsolute >= 0 ? '+' : ''}₹${Math.round(dayPnlAbsolute).toLocaleString()}
                                </span>
                                <span style="font-weight: 700; color: ${dayPnlAbsolute >= 0 ? '#22c55e' : '#ef4444'}; font-size: 0.88rem; background: ${dayPnlAbsolute >= 0 ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)'}; padding: 2px 8px; border-radius: 50px;">
                                    ${dayPnlAbsolute >= 0 ? '+' : ''}${dayPnlPct.toFixed(2)}%
                                </span>
                            </div>
                        </div>
                    ` : `
                        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 4rem 2rem; color:var(--text-muted); text-align:center; flex: 1;">
                            <span style="font-size: 3rem; margin-bottom: 1rem;">💼</span>
                            <p style="font-weight: 800; font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">No active holdings</p>
                            <p style="font-size: 0.88rem; max-width: 280px; margin-bottom: 1.5rem; color: var(--text-muted); line-height: 1.5;">You don't own any index positions yet. Click the <b>Markets</b> tab to browse indices and make your first trade!</p>
                            <button class="btn btn-primary" onclick="flashbackSim.switchTab('markets')" style="padding: 0.6rem 1.5rem; font-size: 0.9rem; font-weight: 700;">Browse Markets →</button>
                        </div>
                    `}
                </div>
            `;

        } else if (flashbackSim.activeTab === 'markets') {
            // Render Markets indices grid
            let cardsHtml = "";
            fbSectors.forEach(sector => {
                const price = dailyMarketData[sector].prices[flashbackSim.dayIdx];
                const prevPrice = flashbackSim.dayIdx === 0 
                    ? price 
                    : dailyMarketData[sector].prices[flashbackSim.dayIdx - 1];
                const dayChange = ((price - prevPrice) / prevPrice) * 100;
                const isPositive = dayChange >= 0;
                const units = flashbackSim.holdings[sector] || 0;

                cardsHtml += `
                    <div onclick="flashbackSim.openDetail('${sector}')" style="background: white; border: 1px solid var(--border); border-radius: 14px; padding: 1.2rem 1.35rem; cursor: pointer; transition: transform 0.18s, box-shadow 0.18s; position: relative;" onmouseover="this.style.boxShadow='0 6px 20px rgba(0,0,0,0.08)'; this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='none'; this.style.transform='none'">
                        <div class="flex justify-between items-center" style="margin-bottom: 0.5rem;">
                            <span style="font-weight: 800; font-size: 1rem; color: var(--primary);">${sector}</span>
                            ${units > 0 ? `<span style="background: rgba(83, 103, 255, 0.15); color: #5367FF; font-size: 0.68rem; font-weight: 800; padding: 3px 8px; border-radius: 6px;">● OWNED</span>` : `<span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">Index</span>`}
                        </div>
                        <div style="font-size: 1.35rem; font-weight: 900; color: var(--text); margin-bottom: 0.25rem; letter-spacing: -0.02em;">₹${Math.round(price).toLocaleString()}</div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="font-size: 0.82rem; font-weight: 700; color: ${isPositive ? '#22c55e' : '#ef4444'}; background: ${isPositive ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)'}; padding: 2px 8px; border-radius: 6px; display: inline-block;">
                                ${isPositive ? '▲ +' : '▼ '}${dayChange.toFixed(2)}%
                            </div>
                            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Tap to trade →</span>
                        </div>
                    </div>
                `;
            });

            leftContainer.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.1rem;">
                    <h4 style="font-weight: 800; font-size: 1rem; color: var(--text-main); letter-spacing: -0.01em;">🏦 Indian Market Indices</h4>
                    <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">Click any index to trade</span>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                    ${cardsHtml}
                </div>
            `;

            // Draw Portfolio Value Line chart on the right (keeps context)
            flashbackSim.renderPortfolioChart();

        } else if (flashbackSim.activeTab === 'detail') {
            // Render Index Detail / Trading Panel
            const sector = flashbackSim.activeSector;
            const price = dailyMarketData[sector].prices[flashbackSim.dayIdx];
            
            const prevPrice = flashbackSim.dayIdx === 0 ? price : dailyMarketData[sector].prices[flashbackSim.dayIdx - 1];
            const dayChange = ((price - prevPrice) / prevPrice) * 100;
            const isPositive = dayChange >= 0;

            const unitsOwned = flashbackSim.holdings[sector] || 0;
            const avg = flashbackSim.avgCost[sector] || 0;
            const currentVal = unitsOwned * price;
            const returnPct = avg > 0 ? ((price - avg) / avg) * 100 : 0;
            const sl = flashbackSim.triggers[sector].sl;
            const tgt = flashbackSim.triggers[sector].tgt;

            // Check if the detailed view is already drawn in the DOM to avoid wiping user typing
            const amtInputExists = document.getElementById('trade-amount');

            if (amtInputExists) {
                // Dynamic DOM Updates: updates only ticking values to preserve input focus & values!
                const detailPriceEl = document.getElementById('detail-price');
                const detailChangeEl = document.getElementById('detail-change');
                const detailPosCardEl = document.getElementById('detail-position-card');
                const btnSellEl = document.getElementById('btn-sell-position');
                const btnUpdateTrigEl = document.getElementById('btn-update-triggers');
                const tradeSlEl = document.getElementById('trade-sl');
                const tradeTgtEl = document.getElementById('trade-tgt');

                if (detailPriceEl) detailPriceEl.innerText = `₹${Math.round(price).toLocaleString()}`;
                if (detailChangeEl) {
                    detailChangeEl.innerText = `${isPositive ? '▲ +' : '▼ '}${dayChange.toFixed(2)}%`;
                    detailChangeEl.style.color = isPositive ? '#22c55e' : '#ef4444';
                }
                if (detailPosCardEl) {
                    detailPosCardEl.innerHTML = `
                        <div style="font-weight: 700; color: var(--text-muted); text-transform: uppercase; font-size: 0.72rem; margin-bottom: 0.5rem; letter-spacing: 0.03em;">Your Position</div>
                        ${unitsOwned > 0 ? `
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem;">
                                <div>Units: <span style="font-weight:700;">${unitsOwned.toFixed(4)}</span></div>
                                <div>Avg Cost: <span style="font-weight:700;">₹${Math.round(avg).toLocaleString()}</span></div>
                                <div>Current Value: <span style="font-weight:700;">₹${Math.round(currentVal).toLocaleString()}</span></div>
                                <div>Profit/Loss: <span style="font-weight:800; color:${returnPct >= 0 ? '#22c55e' : '#ef4444'};">${returnPct >= 0 ? '▲ +' : '▼ '}${returnPct.toFixed(1)}%</span></div>
                            </div>
                        ` : `
                            <div style="color: var(--text-muted); font-size: 0.82rem;">You do not own any positions in this index. Use the buy form below to trade.</div>
                        `}
                    `;
                }

                if (btnSellEl) {
                    btnSellEl.disabled = unitsOwned <= 0;
                    btnSellEl.style.background = unitsOwned <= 0 ? '#f1f5f9' : '#df514c';
                    btnSellEl.style.borderColor = unitsOwned <= 0 ? '#e2e8f0' : '#df514c';
                    btnSellEl.style.color = unitsOwned <= 0 ? '#94a3b8' : 'white';
                    btnSellEl.style.cursor = unitsOwned <= 0 ? 'not-allowed' : 'pointer';
                }

                if (tradeSlEl) tradeSlEl.disabled = unitsOwned <= 0;
                if (tradeTgtEl) tradeTgtEl.disabled = unitsOwned <= 0;

                if (btnUpdateTrigEl) {
                    btnUpdateTrigEl.disabled = unitsOwned <= 0;
                    btnUpdateTrigEl.style.background = unitsOwned <= 0 ? '#f1f5f9' : 'transparent';
                    btnUpdateTrigEl.style.borderColor = unitsOwned <= 0 ? '#e2e8f0' : 'var(--primary)';
                    btnUpdateTrigEl.style.color = unitsOwned <= 0 ? '#94a3b8' : 'var(--primary)';
                    btnUpdateTrigEl.style.cursor = unitsOwned <= 0 ? 'not-allowed' : 'pointer';
                }
            } else {
                // Structural first-time render
                leftContainer.innerHTML = `
                    <div class="flex items-center gap-2 mb-4">
                        <button onclick="flashbackSim.switchTab('markets')" style="background: none; border: none; font-size: 1rem; cursor: pointer; color: var(--text-muted); font-weight: 700;">← Back to Markets</button>
                    </div>

                    <div class="flex justify-between items-center mb-3">
                        <div>
                            <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--primary);">${sector} Index</h2>
                            <span id="detail-price" style="font-size: 1.25rem; font-weight: 800; color: var(--text); display: inline-block; margin-top: 2px;">₹${Math.round(price).toLocaleString()}</span>
                            <span id="detail-change" style="font-size: 0.82rem; font-weight: 700; color: ${isPositive ? '#22c55e' : '#ef4444'}; margin-left: 8px;">
                                ${isPositive ? '▲ +' : '▼ '}${dayChange.toFixed(2)}%
                            </span>
                        </div>
                    </div>

                    <!-- Position Summary Card -->
                    <div id="detail-position-card" style="background: var(--bg-light, #f8fafc); border-radius: 12px; padding: 0.85rem 1.1rem; border: 1px solid var(--border); margin-bottom: 1.25rem; font-size: 0.85rem;">
                        <div style="font-weight: 700; color: var(--text-muted); text-transform: uppercase; font-size: 0.72rem; margin-bottom: 0.5rem; letter-spacing: 0.03em;">Your Position</div>
                        ${unitsOwned > 0 ? `
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem;">
                                <div>Units: <span style="font-weight:700;">${unitsOwned.toFixed(4)}</span></div>
                                <div>Avg Cost: <span style="font-weight:700;">₹${Math.round(avg).toLocaleString()}</span></div>
                                <div>Current Value: <span style="font-weight:700;">₹${Math.round(currentVal).toLocaleString()}</span></div>
                                <div>Profit/Loss: <span style="font-weight:800; color:${returnPct >= 0 ? '#22c55e' : '#ef4444'};">${returnPct >= 0 ? '▲ +' : '▼ '}${returnPct.toFixed(1)}%</span></div>
                            </div>
                        ` : `
                            <div style="color: var(--text-muted); font-size: 0.82rem;">You do not own any positions in this index. Use the buy form below to trade.</div>
                        `}
                    </div>

                    <!-- Execution Trade Box -->
                    <div style="border-top: 1px solid var(--border); padding-top: 1.25rem; margin-bottom: 0;">
                        <label style="display: block; font-weight: 800; font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.6rem; letter-spacing: 0.05em;">💰 Execute Trade</label>
                        <div style="position: relative; margin-bottom: 0.85rem;">
                            <span style="position: absolute; left: 0.85rem; top: 50%; transform: translateY(-50%); font-size: 1rem; font-weight: 800; color: var(--text-muted); pointer-events: none;">₹</span>
                            <input type="number" id="trade-amount" placeholder="Amount to invest..." class="form-control" style="width: 100%; font-weight: 700; padding: 0.7rem 0.85rem 0.7rem 2rem; font-size: 1rem; border-radius: 10px; box-sizing: border-box;" min="1000" step="1000">
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.25rem;">
                            <button class="btn btn-primary" onclick="flashbackSim.executeBuy()" style="font-weight: 800; background: #387ed1; border-color: #387ed1; color: white; cursor: pointer; padding: 0.7rem 1rem; font-size: 0.95rem; border-radius: 10px; transition: opacity 0.15s;" onmouseover="this.style.opacity='0.88'" onmouseout="this.style.opacity='1'">🛒 Buy Index</button>
                            <button id="btn-sell-position" class="btn" onclick="flashbackSim.executeSellAll()" style="font-weight: 800; background: ${unitsOwned <= 0 ? '#f1f5f9' : '#df514c'}; border: 2px solid ${unitsOwned <= 0 ? '#e2e8f0' : '#df514c'}; color: ${unitsOwned <= 0 ? '#94a3b8' : 'white'}; cursor: ${unitsOwned <= 0 ? 'not-allowed' : 'pointer'}; padding: 0.7rem 1rem; font-size: 0.95rem; border-radius: 10px; transition: opacity 0.15s;" ${unitsOwned <= 0 ? 'disabled' : ''} onmouseover="if(!this.disabled) this.style.opacity='0.88'" onmouseout="this.style.opacity='1'">💸 Sell All</button>
                        </div>
                    </div>

                    <!-- Stop-Loss and Target Config -->
                    <div style="border-top: 1px solid var(--border); padding-top: 1.25rem;">
                        <label style="display: block; font-weight: 800; font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.7rem; letter-spacing: 0.05em;">⚙️ Auto-Sell Triggers</label>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.85rem;">
                            <div>
                                <span style="font-size: 0.75rem; font-weight: 700; color: #ef4444; display: block; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.03em;">Stop Loss %</span>
                                <input type="number" id="trade-sl" class="form-control" placeholder="e.g. 5" min="1" max="99" value="${sl || ''}" style="width: 100%; text-align: center; padding: 0.55rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; box-sizing: border-box;" ${unitsOwned <= 0 ? 'disabled' : ''}>
                            </div>
                            <div>
                                <span style="font-size: 0.75rem; font-weight: 700; color: #22c55e; display: block; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.03em;">Target %</span>
                                <input type="number" id="trade-tgt" class="form-control" placeholder="e.g. 10" min="1" max="1000" value="${tgt || ''}" style="width: 100%; text-align: center; padding: 0.55rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; box-sizing: border-box;" ${unitsOwned <= 0 ? 'disabled' : ''}>
                            </div>
                        </div>
                        <button id="btn-update-triggers" class="btn" onclick="flashbackSim.executeSetTriggers()" style="width: 100%; font-weight: 800; padding: 0.65rem; font-size: 0.9rem; border-radius: 10px; background: ${unitsOwned <= 0 ? '#f1f5f9' : 'transparent'}; border: 2px solid ${unitsOwned <= 0 ? '#e2e8f0' : 'var(--primary)'}; color: ${unitsOwned <= 0 ? '#94a3b8' : 'var(--primary)'}; cursor: ${unitsOwned <= 0 ? 'not-allowed' : 'pointer'}; transition: all 0.2s; box-sizing: border-box;" ${unitsOwned <= 0 ? 'disabled' : ''}>Set Auto-Sell Triggers</button>
                    </div>
                `;
            }

            // Draw this index's Candlestick Chart on the right!
            flashbackSim.renderIndexCandlesticks(sector);
        }

        // 3. Render Execution Alerts Log Console
        const alertsContainer = document.getElementById('fb-terminal-alerts');
        if (alertsContainer) {
            alertsContainer.innerHTML = flashbackSim.alerts.map(a => `
                <div style="border-left: 3px solid ${a.type === 'danger' ? 'var(--danger)' : a.type === 'success' ? '#22c55e' : '#5367FF'}; padding-left: 8px; margin-bottom: 2px;">
                    <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block;">${a.date}</span>
                    <span style="font-weight: 500; color: var(--text);">${a.text}</span>
                </div>
            `).join('');
        }
    },

    renderPortfolioChart: () => {
        const titleEl = document.getElementById('fb-chart-title');
        const subEl = document.getElementById('fb-chart-subtitle');
        if (titleEl) titleEl.innerText = "Portfolio Performance";
        if (subEl) subEl.innerText = "Cumulative Value Line (₹)";

        // Configure Dataset 0 for Line, Dataset 1 hidden/empty
        flashbackSim.chart.data.labels = flashbackSim.history.map(h => h.d);
        flashbackSim.chart.data.datasets[0].data = flashbackSim.history.map(h => h.val);
        flashbackSim.chart.data.datasets[0].borderColor = '#5367FF';
        flashbackSim.chart.data.datasets[0].backgroundColor = 'rgba(83, 103, 255, 0.05)';
        flashbackSim.chart.data.datasets[0].borderWidth = 2;
        flashbackSim.chart.data.datasets[0].fill = true;
        flashbackSim.chart.data.datasets[0].pointRadius = 0;

        flashbackSim.chart.data.datasets[1].data = [];
        flashbackSim.chart.data.datasets[1].candles = [];
        flashbackSim.chart.data.datasets[1].candlestick = false;

        flashbackSim.chart.update();
    },

    renderIndexCandlesticks: (sector) => {
        const titleEl = document.getElementById('fb-chart-title');
        const subEl = document.getElementById('fb-chart-subtitle');
        if (titleEl) titleEl.innerText = `${sector} Index Candlestick`;
        if (subEl) subEl.innerText = "OHLC Candles (Daily Close)";

        // Hide Dataset 0 (Portfolio line)
        flashbackSim.chart.data.datasets[0].data = [];
        flashbackSim.chart.data.datasets[0].fill = false;

        // Configure Dataset 1 for Candlesticks
        const rawHistoryLabels = [];
        const rawHistoryCandles = [];
        const rawHistoryClose = [];

        // Show all daily data up to today's index
        for (let i = 0; i <= flashbackSim.dayIdx; i++) {
            rawHistoryLabels.push(dailyDates[i]);
            rawHistoryCandles.push(dailyMarketData[sector].candles[i]);
            rawHistoryClose.push(dailyMarketData[sector].prices[i]);
        }

        // Apply to chart
        flashbackSim.chart.data.labels = rawHistoryLabels;
        flashbackSim.chart.data.datasets[1].data = rawHistoryClose;
        flashbackSim.chart.data.datasets[1].candles = rawHistoryCandles;
        flashbackSim.chart.data.datasets[1].candlestick = true;

        flashbackSim.chart.update();
    },

    finish: () => {
        // Pause ticking
        if (flashbackSim.isPlaying) {
            flashbackSim.togglePlay();
        }

        // Calculate final value
        let finalVal = flashbackSim.cash;
        fbSectors.forEach(sector => {
            const units = flashbackSim.holdings[sector] || 0;
            const currentPrice = dailyMarketData[sector].prices[flashbackSim.dayIdx];
            finalVal += units * currentPrice;
        });

        // Hide active sim section and show result section
        app.showScreen('result-section');
        
        const returnPct = ((finalVal - 100000) / 100000) * 100;
        const isProfit = returnPct >= 0;

        document.getElementById('res-final-user').innerText = `₹${Math.round(finalVal).toLocaleString()}`;
        
        const retEl = document.getElementById('res-final-return');
        if (retEl) {
            retEl.innerText = `${isProfit ? '+' : ''}${returnPct.toFixed(2)}%`;
            retEl.style.color = isProfit ? '#22c55e' : '#ef4444';
        }

        const emojiEl = document.getElementById('fb-res-emoji');
        const titleEl = document.getElementById('fb-res-title');
        const msgEl = document.getElementById('fb-res-msg');

        if (isProfit) {
            emojiEl.innerText = returnPct >= 10 ? '👑' : '🎉';
            titleEl.innerText = returnPct >= 10 ? 'Sensational Trading!' : 'Diversification Wins!';
            msgEl.innerText = `Outstanding! You successfully managed your risks, operated auto-sell triggers correctly, and pulled off a clean profit of ${returnPct.toFixed(1)}% on your capital!`;
        } else {
            emojiEl.innerText = '📉';
            titleEl.innerText = 'Market Learning Complete';
            msgEl.innerText = `You finished with a net loss of ${Math.abs(returnPct).toFixed(1)}%. Remember, keeping stop-loss levels tight and staying calm during daily volatility is essential to survival!`;
        }
    }
};


window.app = app; // Ensure global access
window.flashbackSim = flashbackSim; // Ensure simulator is globally accessible

// Scroll Reveal Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    // We will attach the '.reveal' class to elements in HTML, then observe them here
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});

console.log("App initializing...");
app.init();



