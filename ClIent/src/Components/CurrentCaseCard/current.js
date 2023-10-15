import React from 'react'

function Current() {
  return (
    <div class="w-full overflow-x-auto ">
    <table class="min-w-full">
        <thead>
            <tr>
                <th class="text-center px-6 py-3 bg-gray-300 text-base leading-4 font-medium text-gray-700 uppercase tracking-wider">Case No.</th>
                <th class="text-center px-6 py-3 bg-gray-300 text-base leading-4 font-medium text-gray-700 uppercase tracking-wider">Detail</th>
                <th class="text-center px-6 py-3 bg-gray-300 text-base leading-4 font-medium text-gray-700 uppercase tracking-wider">Lawyer</th>
                <th class="text-center px-6 py-3 bg-gray-300 text-base leading-4 font-medium text-gray-700 uppercase tracking-wider">Court</th>
                <th class="text-center px-6 py-3 bg-gray-300 text-base leading-4 font-medium text-gray-700 uppercase tracking-wider">Duration</th>
                <th class="text-center px-6 py-3 bg-gray-300 text-base leading-4 font-medium text-gray-700 uppercase tracking-wider">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-green-100 border-t border-gray-200">
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">12345</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Property</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Aryan Solanki</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Delhi</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">01-03-2023 to 15-04-2023</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Active</td>
            </tr>
            <tr class="bg-gray-100 border-t border-gray-200">
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">12345</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Property</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Aryan Solanki</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Delhi</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">01-03-2023 to 15-04-2023</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Closed</td>
            </tr>
            <tr class="bg-gray-100 border-t border-gray-200">
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">12345</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Property</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Aryan Solanki</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Delhi</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">01-03-2023 to 15-04-2023</td>
                <td class="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">Closed</td>
            </tr>
        </tbody>
    </table>
</div>


  )
}

export default Current