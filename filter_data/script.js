const mainContainer = document.querySelector('main')
const joblistContainer = document.querySelector('.jobLists')


function printData(data){
    data.forEach((job) => {
        const jobCard = document.createElement('div')

        if (job.featured) {
            jobCard.className = 'jobLists feature'
        }else{
            jobCard.className = 'jobLists'
        }
        
        // creating jobDetails div 
        const jobDetails = document.createElement('div')
        jobDetails.className = 'jobDetails'

        // creating company Logo div
        const companyLogo = document.createElement('div')
        companyLogo.className = 'companyLogo'
        companyLogo.innerHTML = `<img src="${job.logo}">`
        jobDetails.appendChild(companyLogo)

        // creating jobinfo div
        const jobInfo = document.createElement('div')
        jobInfo.className = 'jobinfo'

        // creating companyName div
        const companyName = document.createElement('div')
        companyName.className = 'companyName'
        companyName.innerHTML = job.company
        jobInfo.appendChild(companyName)

        // creating jobTitle div
        const jobTitle = document.createElement('div')
        jobTitle.className = 'jobTitle'
        jobTitle.innerHTML = job.position
        jobInfo.appendChild(jobTitle)

        // creating jobtiming div
        const jobTiming = document.createElement('div')
        jobTiming.className = 'jobtiming'
        jobTiming.innerHTML = `<div>${job.postedAt}</div>
                                <div>${job.contract}</div>
                                <div>${job.location}</div>`
        jobInfo.appendChild(jobTiming)

        // creating features div
        const features = document.createElement('div')
        features.className = 'features'
        if (job.featured && job.new) {
            features.innerHTML = `<div class="featureNew">NEW!</div>
                              <div class="featureFeatured">FEATURED</div>`
        }else if(job.new){
            features.innerHTML = `<div class="featureNew">NEW!</div>`
        }
    
        jobInfo.appendChild(features)
        jobDetails.appendChild(jobInfo)


        // creating tags div
        const tags = document.createElement('div')
        tags.className = 'tags'
        tags.innerHTML = `<div class="tag">${job.role}</div>
                            <div class="tag">${job.level}</div>`

        const languages = job.languages
        languages.forEach((lang) =>{
            tags.innerHTML += `<div class="tag">${lang}</div>`
        })

        // creating hr 
        const hr = document.createElement('hr')

        

            jobCard.appendChild(jobDetails)
            jobCard.appendChild(hr)
            jobCard.appendChild(tags)
            mainContainer.appendChild(jobCard)
    })
}

let data;
fetch('data.json').then((res) => res.json())
.then((companyData) => {
    data = companyData
    printData(data)
})

// const tagContainer = document.querySelector('.tags')
// tagContainer.addEventListener('click', (e) =>{
//     console.log(e.target);
// })